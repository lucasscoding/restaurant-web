import { Restaurant } from '../models/restaurant'
import { RestaurantStatus } from '../models/restaurant-status'

export interface RestaurantUseCase {
  find(): Restaurant
  status(): RestaurantStatus
}