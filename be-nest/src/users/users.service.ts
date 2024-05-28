import { UUID, randomUUID } from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { usersDB } from 'src/db'
import { User } from './users.entity'

const DATA_PATH = '/'

@Injectable()
export class UsersService {
  usersRepository = usersDB // TODO Inject
  constructor(
  ) {}

  async findOneByEmail(email: string): Promise<User | null> {
    return await usersDB.find(DATA_PATH, (entry: any) => {
      console.log('find', entry.email, email)
      return entry.email === email
    })
  }

  async findOneById(id: UUID): Promise<User | null> {
    return await usersDB.find(DATA_PATH, (entry: any) => entry.id === id)
  }

  async create(user: User): Promise<User> {
    const id = randomUUID()
    const newUser = { ...user, id }
    await usersDB.push(DATA_PATH + id, newUser)
    return newUser
  }

  // update(userId: UUID, userInformation: Partial<User>): Promise<UpdateResult> {
  //   return this.usersRepository.update(userId, userInformation)
  // }
}
