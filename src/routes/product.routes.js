import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { createProduct, getProduct, getProducts, deleteProduct,updateProduct } from '../controllers/product.controller.js'

const router = Router()

router.get('/product', getProducts )

router.get('/product/:id',  getProduct)

router.get('/product/:tittle',  getProduct)

router.get('/product/:type',  getProduct)

router.post('/product', createProduct)

router.delete('/product/:id',  deleteProduct)

router.put('/product/:id',  updateProduct)

export default router