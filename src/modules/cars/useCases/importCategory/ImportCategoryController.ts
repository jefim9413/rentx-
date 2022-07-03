import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from './importCategoryUseCase';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCaategoryUsecase = container.resolve(ImportCategoryUseCase);

    await importCaategoryUsecase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
