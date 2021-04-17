import express from 'express';
import {getProducts,getProductByID,updateProduct,createProduct,deleteProduct} from '../controllers/productController.js'
import protect from '../middleware/authMiddleware.js'
import {admin} from '../middleware/authMiddleware.js'

const router = express.Router();

router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

router.route('/:id')
    .get(getProductByID)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct)

export default router