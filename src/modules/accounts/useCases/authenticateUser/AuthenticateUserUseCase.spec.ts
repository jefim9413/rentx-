import { AppError } from '@shared/errors/AppError';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/In-Memory/UsersRepositoryInMemory';
import { CreateUserUsecase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUsecase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUsecase(usersRepositoryInMemory);
  });
  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '00022',
      email: 'test@test.com',
      password: '123456',
      name: 'User test',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an noexisting user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'false@false.com',
        password: '123456',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '9999',
        email: 'user@user.com',
        password: '123456',
        name: 'User test Error',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrect password',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect email', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '9999',
        email: 'user@user.com',
        password: '123456',
        name: 'User test Error',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: 'email@user.com',
        password: user.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
