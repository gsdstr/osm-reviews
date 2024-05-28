import { UUID } from 'node:crypto'

export interface AccessTokenPayload {
  userId: UUID
  email: string
}
