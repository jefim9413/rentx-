import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IResquest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IResquest) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
