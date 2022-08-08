import { NextFunction, Response } from "express";
import { AuthRequest } from "../domain/User";

import * as userService from "../services/userService";

/**
 * Delete an existing user.
 * @param {Request} req
 * @param {Response} res
 */
export const register = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  userService
    .createUser({ name, email, password })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
