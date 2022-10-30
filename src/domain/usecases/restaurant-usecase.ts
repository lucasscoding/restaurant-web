import { Restaurant } from '../models/restaurant'
import { RestaurantStatus } from '../models/restaurant-stats'

export interface RestaurantUseCase {
  load(): Promise<Array<Restaurant>>
  status(): Promise<RestaurantStatus>
}