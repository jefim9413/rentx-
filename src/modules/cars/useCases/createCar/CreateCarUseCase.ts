import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    brand,
    category_id,
    fine_amount,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(
      license_plate,
    );

    if (carAlreadyExists) {
      throw new AppError('car already exists');
    }
    const car = this.carsRepository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });
    return car;
  }
}

export { CreateCarUseCase };
