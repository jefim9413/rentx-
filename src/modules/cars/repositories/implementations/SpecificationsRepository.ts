import { Specification } from '../../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(spec => spec.name === name);
    return specification;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
