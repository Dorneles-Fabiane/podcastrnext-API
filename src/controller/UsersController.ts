import { Request, Response } from "express";
import { UsersService } from "../service/UsersService";

class UsersController {

  async create(request: Request, response: Response): Promise <Response> {
    const userData = request.body;

    const userService = new UsersService();

    const user = await userService.create(userData);

    return response.json(userData);
  }
}

export { UsersController };