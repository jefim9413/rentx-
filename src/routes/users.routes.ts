import { Router } from 'express';
import multer from 'multer';
import { CreateUserUseController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvaterController';

const usersRouter = Router();

const upload = multer({
  dest: 'avatar',
});

const createUserUseController = new CreateUserUseController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post('/', createUserUseController.handle);

usersRouter.patch(
  '/avatar',
  upload.single('file'),
  updateUserAvatarController.handle,
);

export { usersRouter };
