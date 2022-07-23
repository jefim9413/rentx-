import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IResquest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationRepository,
  ) {}

  async execute({ name, description }: IResquest): Promise<void> {
    const categoryAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError('Specification already exists!');
    }
    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
