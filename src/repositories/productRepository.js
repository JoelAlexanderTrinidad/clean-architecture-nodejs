const { Product } = require('../models');

const getAllProducts = async () => {
    const products = await Product.findAll();
    return products;
}

const getProductById = async (id) => {
    const product = await Product.findByPk(id);
    return product;
}

const createProduct = async (productData) => {
    const newProduct = await Product.create(productData);
    return newProduct;
}

const updateProduct = async (id, productData) => {
    const updateProduct = await Product.update(productData, { 
        where: { id }
     });

     return updateProduct;
}

const deleteProduct = async (id) => {
    await Product.destroy({
        where: { id }
    });

}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};

