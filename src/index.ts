import { errors } from "celebrate";
import express from "express";
import { dataSource } from "./config/database";
import clientsRoute from "./routes/clients/clients.route";

const app = express();

const main = async () => {
  dataSource
    .connect()
    .then(() => {
      console.log(`Connected to database postgres`);
    })
    .catch((err: any) => {
      console.log(err);
    });

  app.use(express.json());
  app.use(
    errors({
      statusCode: 400,
    })
  );

  app.use("/api/v1/clients", clientsRoute);

  app.listen(8080, () => {
    console.log(`Server started on port 8080`);
  });
};
main();
