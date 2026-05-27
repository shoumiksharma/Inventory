import express from "express";
import { addProduct, deleteProduct, getProducts, getTransactions, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/add", addProduct)
router.delete("/delete/:name", deleteProduct);
router.get('/get', getProducts);
router.post('/update', updateProduct);
router.get('/transactions/:productId', getTransactions);

export default router