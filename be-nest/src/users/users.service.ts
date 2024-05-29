import { UUID, randomUUID } from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { User } from './users.entity'
import { DBService } from '../db/db.service'

const DATA_PATH = '/'

@Injectable()
export class UsersService {
  readonly usersRepository
  constructor(
    dbService: DBService,
  ) {
    this.usersRepository = dbService.getUsersDB();
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.find(DATA_PATH, (entry: any) => {
      console.log('find', entry.email, email)
      return entry.email === email
    })
  }

  async findOneById(id: UUID): Promise<User | null> {
    return await this.usersRepository.find(DATA_PATH, (entry: any) => entry.id === id)
  }

  async create(user: User): Promise<User> {
    const id = randomUUID()
    const newUser = { ...user, id }
    await this.usersRepository.push(DATA_PATH + id, newUser)
    return newUser
  }

  // update(userId: UUID, userInformation: Partial<User>): Promise<UpdateResult> {
  //   return this.usersRepository.update(userId, userInformation)
  // }
}
