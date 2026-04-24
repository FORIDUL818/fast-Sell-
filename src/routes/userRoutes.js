import express from "express";
import { createProduct } from "../controller/ProductsController.js";

const router = express.Router();

router.post("/ragister",createProduct);
 
export default router;