import { Request, Response } from "express";

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

    res.status(201).json({name, price, user_id: req.user_id})
  }
}