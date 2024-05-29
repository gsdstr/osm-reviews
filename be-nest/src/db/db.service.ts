import { Config, JsonDB } from 'node-json-db'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DBService {
  readonly usersDB = new JsonDB(new Config('store/users', true, true, '/'))//TODO use env variable for path
  constructor() {}
  getUsersDB(): JsonDB {
    return this.usersDB
  }
}
