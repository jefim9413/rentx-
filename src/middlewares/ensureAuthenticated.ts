import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPlayload {
  sub: string;
}

export async function ensureAuthebtucated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing');
  }
  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(
      token,
      'ac81a9ff47be796b7f2e4ccad808e14a',
    ) as IPlayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not exist');
    }
    next();
  } catch {
    throw new Error('Invalid token');
  }
}
