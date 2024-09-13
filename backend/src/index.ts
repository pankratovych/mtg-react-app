import express from "express";
import { card } from "./data";
import cors from "cors";

const api = express();
const port = process.env.PORT ?? 4000;

api.use(express.json());
api.use(cors());

// api.get("/pctype", pctype.get);
// api.get("/pctype/:id", pctype.getById);

// api.get("/category", category.get);
// api.get("/category/:id", category.getById);

 api.get("/cards/", card.getAllCards);
// api.get("/products/:catId", product.getByCategory);

// api.post("/order/:id", order.store);

api.listen(port, () => console.log(`Example app listening on port ${port}`));