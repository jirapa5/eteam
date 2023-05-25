import { Sequelize } from "sequelize-typescript";
import { Products } from "../model/product.model";

export const connect = () => {
  const hostName = process.env.DB_HOST;
  const userName = process.env.DB_USER || "";
  const password = process.env.DB_PASSWORD || "";
  const database = process.env.DB_NAME || "";
  const dialect: any = process.env.DIALECT;

  const operatorsAliases: any = false;

  const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    port: 5433,
    dialect,
    operatorsAliases,
    repositoryMode: true,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  sequelize.addModels([Products]);
  console.log(" add model");
  const db: any = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  return db;
};
