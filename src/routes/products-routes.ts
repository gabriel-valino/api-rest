import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middlewate";

const productsRoutes = Router()

productsRoutes.get("/", (req, res) => {
  // /products?page=1&limit=10
  const { page, limit } = req.query

  if(!page && !limit){
    return res.send("Products")
  }

  res.send(`Page ${page} of ${limit}`)
})

productsRoutes.post("/", myMiddleware,(req, res) => {
  const { name, price} = req.body

  // res.send(`Produto ${name} custa R$${price}`)
  res.status(201).json({name, price, user_id: req.user_id})
})

export { productsRoutes }