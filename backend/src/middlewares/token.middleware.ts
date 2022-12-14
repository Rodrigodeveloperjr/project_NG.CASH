import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const tokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token || !token.includes("Bearer")) {
    return res.status(401).json({ message: "Invalid token" });
  }

  jwt.verify(
    token?.split(" ")[1],
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: "Invalid token" });
      }

      req.username = decoded.username;

      return next();
    }
  );
};

export { tokenMiddleware };
