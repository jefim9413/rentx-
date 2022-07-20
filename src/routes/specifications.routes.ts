import { Router } from 'express';
import { ensureAuthebtucated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.use(ensureAuthebtucated);
specificationsRoutes.post('/', createSpecificationController.handle);

export { specificationsRoutes };
