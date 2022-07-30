import { Request, Response } from "express";
import * as clientRepo from "../../repository/client.repository";

export const createClient = async (req: Request, res: Response) => {
  try {
    const data = await clientRepo.createClient({ ...req.body });
    return res.status(201).json({ message: "Create Client Success!", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
