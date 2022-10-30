import React from 'react'
import { Restaurant } from '../../domain/models/restaurant'
import { RestaurantStats } from '../../domain/models/restaurant-stats'
import { RestaurantUseCase } from '../../domain/usecases/restaurant-usecase'
import { RestaurantFactory } from '../factories/restaurant-factory'

type Props = any

type State = {
   stats: RestaurantStats
   restaurants: Array<Restaurant>
}

export abstract class AbstractRestaurantTemplateAdapter extends React.Component<Props, State> {
  private readonly restaurantService: RestaurantUseCase

  state: State = {
    stats: { countries: 0, cities: 0, restaurants: 0 },
    restaurants: []
  }

  constructor(props: Props) {
    super(props)
    this.restaurantService = RestaurantFactory.createRestaurantService()
  }
  
  componentDidMount() {
    this.handleLoadStatus()
    //this.handleLoadRestaurant()
  }

  handleLoadStatus(): void {
    this.restaurantService.status().then(stats => this.setState({ stats }))
    .catch(this.handleLoadStatusError)
  }

  handleLoadRestaurant(): void {
    this.restaurantService.load().then(restaurants => this.setState({ restaurants }))
    .catch(this.handleLoadRestaurantError) 
  }

  abstract handleLoadStatusError(error: Error): void

  abstract handleLoadRestaurantError(error: Error): void
  
}