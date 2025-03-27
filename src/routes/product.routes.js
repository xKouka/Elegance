import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { createProduct, getProduct, getProducts, deleteProduct,updateProduct } from '../controllers/product.controller.js'

const router = Router()

router.get('/product', getProducts )

router.get('/product/:id', authRequired, getProduct)

router.post('/product', authRequired, createProduct)

router.delete('/product/:id', authRequired, deleteProduct)

router.put('/product/:id', authRequired, updateProduct)

export default router