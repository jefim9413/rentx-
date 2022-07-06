import { Router } from 'express';
import { CreateUserUseController } from '../modules/accounts/useCases/createUser/CreateUserController';

const usersRouter = Router();

const createUserUseController = new CreateUserUseController();

usersRouter.post('/', createUserUseController.handle);

export { usersRouter };
