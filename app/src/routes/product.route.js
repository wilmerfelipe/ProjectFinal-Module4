import express from "express";
import {
    createProductController,
    getAllProductsController,
    getCategoryProductsController,
    getSizeProductsController,
    deleteProductsController,
    updateProductsController
} from "../controllers/product.controller.js";

const productInventory = express.Router();

productInventory.get("/", (req, res) => {
    res.status(200).json({ message: "ok" });
});
productInventory.get("/getAllProducts", getAllProductsController);
productInventory.get("/category/:category", getCategoryProductsController);
productInventory.get("/size/:size", getSizeProductsController);
productInventory.post("/createProduct", createProductController);
productInventory.delete("/deleteProduct", deleteProductsController);
productInventory.put("/updateProduct", updateProductsController);
//Crear
// http://localhost:3000/product/createProduct
//Querys
// http://localhost:3000/product/category/
// http://localhost:3000/product/size/
// http://localhost:3000/product/getAllProducts
// Delete * Id
// http://localhost:3000/product/deleteProduct
// Modify * Id
// http://localhost:3000/product/updateProduct
export default productInventory;