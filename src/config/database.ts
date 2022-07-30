import { Banker, Client, Transaction } from "../entities";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 1403,
  username: "postgres",
  password: "p4ssw0rd",
  database: "postgres",
  entities: [Client, Banker, Transaction],
  synchronize: true,
});
