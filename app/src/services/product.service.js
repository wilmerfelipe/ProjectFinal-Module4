import ProductModel from "../models/product.model.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
import "dotenv/config";

class ProductService {
    productModel = null;
    constructor() {
        this.productModel = new ProductModel();
}
    async createProduct(req) {
        try {
        const { name, category, size, color, quantity, price, url } = req.body;
            if (!(name && category && size && color && quantity && price && url)) {
                return { statusCode: 400, message: "All inputs are required {name, category, size, color, quantity, price, url}" };
        }
        const product = await this.productModel.createProduct({
            name,
            category,
            size,
            color,
            quantity,
            price,
            url
        });
            if (product.error) return { statusCode: 400, message: product.error };
            return {
                statusCode: 200,
                message: "product registered successfully",
                product,
            };
        } catch (error) {
        throw new Error(error);
        }
    }
    async getAllProducts() {
        const response = await this.productModel.findAllProducts();
        return { statusCode: 200, products: response };
    }
    async getCategoryProducts(req){
        const responseurl = req.params; //get data from route params 
        const response = await this.productModel.findCategoryProducts(responseurl?.category);
        return { statusCode: 200, productsCategory: response };
    }
    async getSizeProducts(req){
        const responseurl = req.params; //get data from route params 
        const response = await this.productModel.findSizeProducts(responseurl?.size);
        return { statusCode: 200, productsSize: response };
    }
    async deleteProductById(req){
        try {
            const id = req.body.id;
                if (!(id)) {
                    return { statusCode: 400, message: "input Id is required" };
            }
            const product = await this.productModel.deleteProduct(id);
                if (product.error) return { statusCode: 400, message: product.error };
                return {
                    statusCode: 200,
                    message: "product deleted successfully",
                    product,
                };
        } catch (error) {
        throw new Error(error);
        }
    }
    async updateProductById(req){
        try {
            const id = req.body.id;
            const updateData = req.body;
                if (!(id)) {
                    return { statusCode: 400, message: "input Id is required" };
            }
            const product = await this.productModel.updateProduct(id, updateData);
                if (product.error) return { statusCode: 400, message: product.error };
                return {
                    statusCode: 200,
                    message: "product was update successfully",
                    product,
                };
            } catch (error) {
            throw new Error(error);
            }
    }
}

export default ProductService;
