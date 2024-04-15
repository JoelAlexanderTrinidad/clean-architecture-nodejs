const productRepository = require('../repositories/productRepository');

const getAllProducts = async () => {};
const getProductById = async (id) => {};
const createProduct = async (product) => {};

const updateProduct = async (id, productData) => {
    const product = await productRepository.getProductById(id);
    if(!product){
        throw new Error('Producto no encontrado');
    }

    // product.isBloked puede ser una propiedad del producto con un booleano en true
    if(product.isBloked){
        throw new Error('Producto no puede ser modificado');
    }

    const updateProduct = await productRepository.updateProduct(id, productData);
    return updateProduct;
};

const deleteProduct = async (id) => {};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};