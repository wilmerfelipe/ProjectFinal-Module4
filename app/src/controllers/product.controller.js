import ProductService from "../services/product.service.js";

const productService = new ProductService();

export const createProductController = async (req, res) => {
    const createProductResult = await productService.createProduct(req);
    res.status(createProductResult.statusCode).json(createProductResult);
};

export async function getAllProductsController(req, res) {
    const getAllProductsResult = await productService.getAllProducts(req);
    res.status(getAllProductsResult.statusCode).json(getAllProductsResult);
}

export async function getCategoryProductsController(req, res) {
    const getCategoryProductsResult = await productService.getCategoryProducts(req);
    res.status(getCategoryProductsResult.statusCode).json(getCategoryProductsResult);
}

export async function getSizeProductsController(req, res) {
    const getSizeProductsResult = await productService.getSizeProducts(req);
    res.status(getSizeProductsResult.statusCode).json(getSizeProductsResult);
}

export async function deleteProductsController(req, res) { 
    const deleteProductsResult = await productService.deleteProductById(req);
    res.status(deleteProductsResult.statusCode).json(deleteProductsResult);
}

export async function updateProductsController(req, res) {
    const updateProductsResult = await productService.updateProductById(req);
    res.status(updateProductsResult.statusCode).json(updateProductsResult);
}