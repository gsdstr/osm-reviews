import { UUID } from 'node:crypto'

export class Place {
  id?: UUID

  name: string

  latitude: number

  longitude: number
}
