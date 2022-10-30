import React from 'react'
import { Restaurant } from '../../domain/models/restaurant'
import { RestaurantStatus } from '../../domain/models/restaurant-status'
import { RestaurantFactory } from '../factories/restaurant-factory'

type Props = any

type State = {
   status: RestaurantStatus
   restaurants: Array<Restaurant> 
}

export abstract class AbstractRestaurantPageAdapter extends React.Component<Props, State> {
  handleLoadRestaurant(errorCallBack: Function): void {
    const restaurantService = RestaurantFactory.createRestaurantService()
    restaurantService.load().then(restaurants => this.setState({ restaurants }))
    .catch(error => errorCallBack(error)) 
  }

  handleLoadStatus(errorCallBack: Function): void {
    const restaurantService = RestaurantFactory.createRestaurantService()
    restaurantService.status().then(status => this.setState({ status }))
    .catch(error => errorCallBack(error))
  }
}