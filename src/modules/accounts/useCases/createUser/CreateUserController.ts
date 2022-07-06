import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUsecase } from './CreateUserUseCase';

class CreateUserUseController {
  async handle(resquet: Request, response: Response): Promise<Response> {
    const { name, email, password, username, driver_license } = resquet.body;

    const createUserUseCase = container.resolve(CreateUserUsecase);

    await createUserUseCase.execute({
      name,
      email,
      password,
      username,
      driver_license,
    });
    return response.status(201).send();
  }
}

export { CreateUserUseController };
