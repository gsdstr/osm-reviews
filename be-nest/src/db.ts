import { Config, JsonDB } from 'node-json-db'

export const usersDB = new JsonDB(new Config('store/users', true, true, '/'))
