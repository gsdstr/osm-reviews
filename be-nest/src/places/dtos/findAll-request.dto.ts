import { ApiProperty } from '@nestjs/swagger'

export class FindAllRequestDto {
  @ApiProperty()
  query: string
}
