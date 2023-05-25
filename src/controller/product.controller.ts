// import { Products } from "../model/product.model";
import { ProductService } from "../service/product.service";

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async getProducts() {
    return await this.productService.getProducts();
  }

  async getProduct(productId: string) {
    return await this.productService.getProduct(productId);
  }

  async createProduct(product: any) {
    return await this.productService.createProduct(product);
  }

  async updateProduct(product: any) {
    return await this.productService.updateProduct(product);
  }

  async deleteProduct(productId: string) {
    return await this.productService.deleteProduct(productId);
  }
}
