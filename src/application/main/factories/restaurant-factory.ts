import { RestaurantService } from '@/core/data/usecases/restaurant-service'
import { HttpClientService } from '@/infra/http/http-service'
import { hostConfig } from '@/application/main/config/env-config'

export class RestaurantFactory {
  public static createRestaurantService(): RestaurantService {
    const httpClientService = new HttpClientService()
    const restaurantService = new RestaurantService(hostConfig, httpClientService)
    return restaurantService
  }
}