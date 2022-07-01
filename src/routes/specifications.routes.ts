import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.post('/', (request, response) => {
  createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
