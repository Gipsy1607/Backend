import { Router } from "express";
import authRoutes from "./Auth.routes.js"
import productsRoutes from "./Products.route.js"

const router = router();

router.use("/auth", authRoutes)
router.use("/products", productsRoutes)

export default router