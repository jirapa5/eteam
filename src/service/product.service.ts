import { Products } from "../model/product.model";
import { ProductRepository } from "../repository/product.repository";

export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getProducts() {
    return await this.productRepository.getProducts();
  }

  async getProduct(productId: string) {
    return await this.productRepository.getProduct(productId);
  }

  async createProduct(product: Products) {
    return await this.productRepository.createProduct(product);
  }

  async updateProduct(product: Products) {
    return await this.productRepository.updateProduct(product);
  }

  async deleteProduct(productId: string) {
    return await this.productRepository.deleteProduct(productId);
  }
}
