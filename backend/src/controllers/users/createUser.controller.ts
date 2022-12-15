import { createUserService } from "../../services/users/createUser.service";
import { IUserRequest } from "../../interfaces/users";
import { Request, Response } from "express";

const createUserController = async (req: Request, res: Response) => {
  const data: IUserRequest = req.body;

  const newUser = await createUserService(data);

  return res.status(201).json(newUser);
};

export { createUserController };
