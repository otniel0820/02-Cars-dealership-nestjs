import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Car } from "./interfaces/car.interface";
import { v4 as uuid } from "uuid";
import { UpdateCarDTO, CreateCarDTO } from "./dto";
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: "Toyota",
      model: "Camry",
    },
    {
      id: uuid(),
      brand: "Honda",
      model: "Civic",
    },
    {
      id: uuid(),
      brand: "BMW",
      model: "M4",
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID '${id}' not found`);

    return car;
  }

  create(createCarDTO: CreateCarDTO) {
    const car: Car = {
      id: uuid(),
      ...createCarDTO,
    };

    this.cars.push(car);

    return car;
  }
  update(id: string, updateCarDTO: UpdateCarDTO) {
    let carDB = this.findOneById(id);

    //Validacion por si manda un ID incorrecto aunque ya se hace la validacion mediante el Dto con el decorador esta seria otra manera de validarlo
    if (updateCarDTO.id && updateCarDTO.id !== id)
      throw new BadRequestException("Car id is not valid inside body");

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDTO, id };
        return carDB;
      }
      return car;
    });

    return carDB;
  }
  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);

  }
}
