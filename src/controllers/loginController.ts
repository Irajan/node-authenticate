import { NextFunction, Request, Response } from "express";

import * as userService from "../services/userService";
import * as tokenService from "../services/tokenService";

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

/**
 *
 *
 */
export const getAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { refreshToken } = req.body;

  tokenService
    .getAccessToken(refreshToken)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
