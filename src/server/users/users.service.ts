import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(userDetails: CreateUserDto): Promise<User> {
    const errors = await this.checkForDuplicatedData(userDetails);
    if (errors) return;
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findOneByUsername(username: string) {
    return this.userRepository.findOneBy({ username });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const errors = await this.checkForDuplicatedData(updateUserDto);
    if (errors) return;
    return this.userRepository.update({ id }, { ...updateUserDto });
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }

  async checkForDuplicatedData(
    userDetails: CreateUserDto | UpdateUserDto,
  ): Promise<ConflictException | void> {
    const duplicateEmail = await this.userRepository.findOne({
      where: { email: userDetails.email },
    });
    const duplicateUsername = await this.userRepository.findOne({
      where: { username: userDetails.username },
    });
    if (duplicateEmail) return new ConflictException('Email already exist.');
    if (duplicateUsername)
      return new ConflictException('Username already exist.');
  }
}
