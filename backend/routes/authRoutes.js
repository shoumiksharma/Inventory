import express from "express";
import { login, logout, signIn } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login)
router.post("/signin", signIn)
router.post("/logout", logout)

export default router;