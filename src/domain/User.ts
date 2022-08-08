import { Request } from "express";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserToInsert {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export type RegisterUser = UserToInsert;

export default User;

interface AuthorizedRequest extends Request {
  authUser?: number;
}

interface TokenPayload {
  userId: number;
}

export type DataStoredInToken = TokenPayload;

export type AuthRequest = AuthorizedRequest;
