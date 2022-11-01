import { Restaurant } from '../models/restaurant'
import { RestaurantStats } from '../models/restaurant-stats'

export interface RestaurantUseCase {
  load(): Promise<Array<Restaurant>>
  stats(): Promise<RestaurantStats>
}