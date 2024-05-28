import { UUID } from 'node:crypto'

export class User {
  id?: UUID

  email: string

  password: string

  firstName: string

  lastName: string
}
