import fs from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "../common/productData.txt");

class ProductModel {
  async createProduct({ name, category, size, color, quantity, price, url }) {
    const existingData = await fs.readFile(filePath, "utf-8");
    const existingProducts = existingData ? JSON.parse(existingData) : [];
    const existingName = existingProducts.filter((productCreate) => productCreate.name === name);

    if (existingName[0]) {
      return { error: "Name already is registered" };
    } else {
    const id = uuidv4();
      const productData = {
        id,
        name: name,
        category: category,
        size: size, 
        color: color,
        quantity: quantity,
        price: price,
        url: url
      };
    existingProducts.push(productData);
    await fs.writeFile(filePath, JSON.stringify(existingProducts));
    return productData;
    }
  }
  async findAllProducts() {
    const existingData = await fs.readFile(filePath, "utf-8");
    const existingProducts = existingData ? JSON.parse(existingData) : [];

    if (existingProducts.length) {
      return existingProducts;
    } else {
      return { error: "has not products yet" };
    }
  }
  
  async findCategoryProducts(category) {
    const existingData = await fs.readFile(filePath, "utf-8");
    const existingProducts = existingData ? JSON.parse(existingData) : [];
    const categoryQuery = existingProducts.filter((product) => product.category === category);
    if (categoryQuery.length === 0) {
      return { error: "Category not is registered" };
    } else {
      return categoryQuery;
    }
  }
  async findSizeProducts(size) {
    const existingData = await fs.readFile(filePath, "utf-8");
    const existingProducts = existingData ? JSON.parse(existingData) : [];
    const indexIdQuery = existingProducts.filter((product) => product.size === size);
    if (indexIdQuery.length === 0) {
      return { error: "Size not registered" };
    } else {
      return indexIdQuery;
    }
  }
  async deleteProduct(id) {
    const existingData = await fs.readFile(filePath, "utf-8");
    const existingProducts = existingData ? JSON.parse(existingData) : [];
    const indexIdQuery = existingProducts.findIndex((product) => product.id === id);
    if (indexIdQuery === -1) {
      return { error: "This product ID does not exist" };
    } else {
      existingProducts.splice(indexIdQuery, 1)
      await fs.writeFile(filePath, JSON.stringify(existingProducts));
      return indexIdQuery;
    }
  }
  async updateProduct(id, updateData) {
    const existingData = await fs.readFile(filePath, "utf-8");
    const existingProducts = existingData ? JSON.parse(existingData) : [];
    const indexIdQuery = existingProducts.findIndex((product) => product.id === id);
    if (indexIdQuery === -1) {
      return { error: "This product ID does not exist" };
    } else {
      // existingProducts.splice(indexIdQuery, 1, updateData)
      function update (arr, id, updateData){
        return arr.map((item) => item.id === id ? {...item, ...updateData} : item);
      }
      const resultUpdate = update(existingProducts, id, updateData);
      await fs.writeFile(filePath, JSON.stringify(resultUpdate));
      return resultUpdate[indexIdQuery];
    }
  }
}

export default ProductModel;
