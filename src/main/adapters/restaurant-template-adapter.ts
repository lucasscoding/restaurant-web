import React from 'react'
import { Restaurant } from '../../domain/models/restaurant'
import { RestaurantStats } from '../../domain/models/restaurant-stats'
import { RestaurantFactory } from '../factories/restaurant-factory'

type Props = any

type State = {
   status: RestaurantStats | {}
   restaurants: Array<Restaurant> | []
}

export abstract class AbstractRestaurantTemplateAdapter extends React.Component<Props, State> {
  state: State = {
    status: {},
    restaurants: []
  }
  handleLoadStatus(): void {
    const restaurantService = RestaurantFactory.createRestaurantService()
    restaurantService.status().then(status => this.setState({ status }))
    .catch(this.handleLoadStatusError)
  }

  handleLoadRestaurant(): void {
    const restaurantService = RestaurantFactory.createRestaurantService()
    restaurantService.load().then(restaurants => this.setState({ restaurants }))
    .catch(this.handleLoadRestaurantError) 
  }

  abstract handleLoadStatusError(error: Error): void

  abstract handleLoadRestaurantError(error: Error): void
  
}