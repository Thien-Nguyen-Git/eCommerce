import express from 'express'
// import asyncHandler from 'express-async-handler'
const router = express.Router()
// import Product from '../models/productModel.js'
import { 
    getProductById, 
    getProducts 
} from '../controllers/productController.js'


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
// router.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     // throw new Error('Some error')
//     res.json(products)
// }))

router.route('/').get(getProducts)

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
// router.get(
//     '/:id', 
//     asyncHandler(async (req, res) => {
//         // const product = products.find(p => p._id === req.params.id)
//         const product = await Product.findById(req.params.id)

//         if(product) {
//             res.json(product)
//         } else {
//             res.status(404)
//             throw new Error('Product not found')
//         }
//     })
// )

router.route('/:id').get(getProductById)

export default router