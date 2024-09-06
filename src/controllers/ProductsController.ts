import { Request, Response } from "express";
import { AppError } from "../utils/AppError";

export class ProductsController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query

    if(!page && !limit){
      return res.send("Products")
    }

    res.send(`Page ${page} of ${limit}`)
  }

  create(req: Request, res: Response) {
    const { name, price} = req.body

    if(!name) {
      throw new AppError("Nome do produto é obrigatório!")
    }

    // throw new AppError("Erro ao tentar criar um produto.")

    res.status(201).json({name, price, user_id: req.user_id})
  }
}