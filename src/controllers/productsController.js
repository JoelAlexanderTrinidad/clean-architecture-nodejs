const productService = require('../services/productService.js');
const { sendSuccessResponse } = require('../adapters/http/sendResponse.js');

const getAllProducts = async (req,res,next) =>{
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al obtener la lista de productos');
    }
};


const getProductById = async (req,res,next) =>{};
const createProduct = async (req,res,next) =>{};

const updateProduct = async (req,res,next) =>{
    try {

        const { productId } = req.params.productId;
        const payload = req.body;

        const product = await productService.updateProduct(productId,payload);
        sendSuccessResponse(product);

    } catch (err) {
        
    }
};

const deleteProduct = async (req,res,next) =>{};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};