import { NextFunction, Response } from "express";
import { AuthRequest } from "../domain/User";

import * as tokenService from "../services/tokenService";

/**
 * Delete an existing user.
 * @param {Request} req
 * @param {Response} res
 */
export const logOut = (req: AuthRequest, res: Response, next: NextFunction) => {
  const userId = req.authUser;

  console.log(userId);

  tokenService
    .deleteRefreshToken(userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
