import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IResquest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IResquest): void {
    const categoryAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Specification already exists!');
    }
    this.specificationsRepository.create({ name, description });

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
