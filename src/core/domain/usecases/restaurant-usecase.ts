import {Restaurant} from '@/core/domain/models/restaurant';
import {RestaurantStats} from '@/core/domain/models/restaurant-stats';

export interface RestaurantUseCase {
  load(): Promise<Array<Restaurant>>;
  stats(): Promise<RestaurantStats>;
}
