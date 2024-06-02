import { ApiProperty } from "@nestjs/swagger"
import { UUID } from "node:crypto"

export class CreateReviewDto {
  @ApiProperty()
  placeId: UUID

  @ApiProperty()
  rating: number

  @ApiProperty()
  comment: string
}
