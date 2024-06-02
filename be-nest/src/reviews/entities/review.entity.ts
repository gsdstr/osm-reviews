import { UUID } from "node:crypto"

export class Review {
  id?: UUID

  userId: UUID

  placeId: UUID

  rating: number

  comment: string

  timestamp: Date
}
