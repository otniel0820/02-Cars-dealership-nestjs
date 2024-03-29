import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  // UsePipes,
  // ValidationPipe,
} from "@nestjs/common";
import { CarsService } from "./cars.service";
import { UpdateCarDTO, CreateCarDTO } from "./dto";

@Controller("cars")
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(":id")
  getCarById(@Param("id", new ParseUUIDPipe({ version: "4" })) id: string) {
    console.log({ id });

    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDTO: CreateCarDTO) {
    return this.carsService.create(createCarDTO);
  }

  @Patch(":id")
  updateCar(@Param("id", ParseUUIDPipe) id: string, @Body() updateCar: UpdateCarDTO) {
    return this.carsService.update(id, updateCar);
  }

  @Delete(":id")
  deleteCar(@Param("id", ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
