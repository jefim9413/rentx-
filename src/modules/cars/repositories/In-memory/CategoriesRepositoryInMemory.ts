import { Category } from '@modules/cars/entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  category: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.category.find(c => c.name === name);
    return category;
  }

  async list(): Promise<Category[]> {
    const all = this.category;
    return all;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.category.push(category);
  }
}

export { CategoriesRepositoryInMemory };
