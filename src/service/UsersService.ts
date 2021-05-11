import { getCustomRepository, Repository } from "typeorm";
import { hash } from 'bcryptjs';
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface UserData {
  name: string;
  email: string;
  password: string;
}

class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({name, email, password}: UserData) {
    const userExists = await this.usersRepository.findOne({
      email
    });

    if(userExists){
      return {
        error: "User already exists!"
      };
    }

    const hashedPassword = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      password: hashedPassword
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersService };