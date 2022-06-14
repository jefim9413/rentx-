import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './importCategoryUseCase';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };
