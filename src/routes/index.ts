import { Router } from "express";

import userRoutes from "./userRoutes";
import loginRouter from "./loginRoutes";
import tokenRouter from "./tokenRoutes";
import logOutRouter from "./logOutRoutes";
import registerRouter from "./registerRoutes";

import authenticate from "../middlewares/authenticate";

const router = Router();

router.use("/register", registerRouter);

router.use("/login", loginRouter);

router.use("/token", tokenRouter);

router.use(authenticate);

router.use("/logout", logOutRouter);

router.use("/users", userRoutes);

export default router;
