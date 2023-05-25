import { Table, Column, Model, HasMany } from "sequelize-typescript";

@Table({ modelName: "Products", tableName: "products" })
export class Products extends Model<any, any> {
  public id!: number;
  public name!: string;
  public image!: string;
  public descriptin!: string;
  public price!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}
