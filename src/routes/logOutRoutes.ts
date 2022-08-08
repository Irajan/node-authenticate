import Router from "express";

import * as logOutController from "../controllers/logoutController";

const router = Router();

router.delete("/", logOutController.logOut);

export default router;
