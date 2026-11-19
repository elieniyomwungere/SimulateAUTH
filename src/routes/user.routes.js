import express from "express";
import { registerController } from "../controllers/auth.controller.js";

const router = express.Router();

// les routes a developper

router.post('/register', registerController);


export default router;