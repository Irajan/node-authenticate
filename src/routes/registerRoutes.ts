import Router from "express";

import * as registerController from "../controllers/registerController";

const router = Router();

router.delete("/", registerController.register);

export default router;
