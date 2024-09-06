import { Request, Response } from "express";
import { AppError } from "../utils/app-error";
import * as z from 'zod'

export class ProductsController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query

    if(!page && !limit){
      return res.send("Products")
    }

    res.send(`Page ${page} of ${limit}`)
  }

  create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z
        .string({required_error: "Name is required"})
        .trim()
        .min(6, {message: "Name must have 6 or more characters"}),
      price: z.number({required_error: "Price is required"}).nonnegative({message: "Price must be positive"})
    })

    const { name, price } = bodySchema.parse(req.body)

    // if(!name) {
    //   throw new AppError("Nome do produto é obrigatório!")
    // }
    
    // if(name.trim().length < 6) {
    //   throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres!")
    // }

    // if(!price) {
    //   throw new AppError("Preço do produto é obrigatório!")
    // }

    // if(price < 0) {
    //   throw new AppError("Preço do produto deve ser maior que 0!")
    // }

    // throw new AppError("Erro ao tentar criar um produto.")

    res.status(201).json({name, price, user_id: req.user_id})
  }
}