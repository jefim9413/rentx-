import { CreateUserUseController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvaterController';
import { Router } from 'express';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '../../../../config/upload';

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserUseController = new CreateUserUseController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post('/', createUserUseController.handle);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRouter };
