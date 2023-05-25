import * as bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { ProductController } from "./src/controller/product.controller";

import "dotenv/config";

class App {
  public express: express.Application;
  public productController: ProductController;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.productController = new ProductController();
  }

  // middleware
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.express.get("/api/products", (_req: Request, res: Response) => {
      this.productController.getProducts().then((data) => res.json(data));
    });

    this.express.post("/api/product", (req: Request, res: Response) => {
      console.log(req.body);
      this.productController
        .createProduct(req.body.product)
        .then((data) => res.json(data));
    });

    this.express.put("/api/product", (req: Request, res: Response) => {
      this.productController
        .updateProduct(req.body.product)
        .then((data) => res.json(data));
    });

    this.express.delete("/api/product/:id", (req: Request, res: Response) => {
      const id: string = req.params.id;
      this.productController.deleteProduct(id).then((data) => res.json(data));
    });

    this.express.get("/", (_req: Request, res: Response, next) => {
      res.send("start server");
    });

    // handle undefined routes
    this.express.use("*", (req: Request, res: Response, next) => {
      res.send("Path or url incorect!");
    });
  }
}

export default new App().express;
