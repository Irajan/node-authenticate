import { NextFunction, Request, Response } from "express";

import * as userService from "../services/userService";

/**
 * Delete an existing user.
 * @param {Request} req
 * @param {Response} res
 */
export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  userService
    .login(email, password)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
