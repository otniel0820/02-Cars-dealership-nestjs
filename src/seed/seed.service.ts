import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';


@Injectable()
export class SeedService {
  
  constructor(
    private readonly carService: CarsService,
    private readonly brandsService: BrandsService,
  ){}
  populateDB() {

    this.carService.fillCarsWithSeedData(CARS_SEED)
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED)
    return 'SEED execute'
  }


}
