import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './importCategoryUseCase';

class ImportCategoryController {
  constructor(private importCaategoryUsecase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importCaategoryUsecase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
