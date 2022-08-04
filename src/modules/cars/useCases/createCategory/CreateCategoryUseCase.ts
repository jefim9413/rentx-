import { AppError } from '@shared/errors/AppError';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

interface IResquest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IResquest) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists!');
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
