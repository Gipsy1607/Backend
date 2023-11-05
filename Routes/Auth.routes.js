import { Router } from "express";
import { Login } from "./../Controller/Auth-controller.js"

const router = Router();

router.get("/login", Login)

export default router