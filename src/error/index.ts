import { isCelebrateError } from "celebrate";
import { NextFunction, Request, Response } from "express";

export const handleError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isCelebrateError(err)) {
    err.details.forEach((_err: any) => {});
    res.status(400).json({ err });
  }
  next();
};
