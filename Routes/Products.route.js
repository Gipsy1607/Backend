import { Router } from "express";
import { checkUserId } from "../AllMiddlewares/Allmiddlewares";
import {GetAllProducts, addProduct} from '../Controller/Products.Controllers'

const router = Router();

router.post('/add-product', checkUserId, addProduct)
router.post('/get-all-product', checkUserId, GetAllProducts)

export default router; 