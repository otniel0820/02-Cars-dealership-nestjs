import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'BMW',
      model: 'M4',
    },
  ];

  findAll(){
    return this.cars;
  }

  findOneById(id: number){
    return this.cars.find((car) => car.id === id);
  }
}
