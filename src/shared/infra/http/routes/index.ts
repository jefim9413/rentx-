import { Router } from 'express';
import { authenticateRoutes } from './Authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRouter);
router.use(authenticateRoutes);

export { router };
