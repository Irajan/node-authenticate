import { Router } from "express";

import userRoutes from "./userRoutes";
import loginRouter from "./loginRoutes";

import authenticate from "../middlewares/authenticate";

const router = Router();

router.use("/login", loginRouter);

router.use(authenticate);

router.use("/users", userRoutes);

export default router;
