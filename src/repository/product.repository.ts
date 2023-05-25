import { connect } from "../config/db.config";
import { Products } from "../model/product.model";

export class ProductRepository {
  private db: any = {};
  private productRespository: any;

  constructor() {
    this.db = connect();
    this.db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
    this.productRespository = this.db.sequelize.getRepository(Products);
  }

  async getProducts() {
    try {
      const products = await this.productRespository.findAll();
      console.log("get products:", products);
      return products;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getProduct(productId: string) {
    try {
      const products = await this.productRespository.find(productId);
      console.log("get only one product:", products);
      return products;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createProduct(product: any) {
    let data = {};
    try {
      product.createdate = new Date().toISOString();
      data = await this.productRespository.create(product);
    } catch (err) {
      throw err;
    }
    return data;
  }

  async updateProduct(product: any) {
    let data = {};
    try {
      product.updateddate = new Date().toISOString();
      data = await this.productRespository.update(
        { ...product },
        {
          where: {
            id: product.id,
          },
        }
      );
    } catch (err) {
      throw err;
    }
    return data;
  }

  async deleteProduct(productId: string) {
    let data = {};
    try {
      data = await this.productRespository.destroy({
        where: {
          id: productId,
        },
      });
    } catch (err) {
      throw err;
    }
    return data;
  }
}
