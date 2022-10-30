import { RestaurantService } from '../../data/usecases/restaurant-service'
import { HttpClientService } from '../../infra/http/http-service'

export class RestaurantFactory {
  public static createRestaurantService(): RestaurantService {
    const httpClientService = new HttpClientService()
    const restaurantService = new RestaurantService(httpClientService)
    return restaurantService
  }
}