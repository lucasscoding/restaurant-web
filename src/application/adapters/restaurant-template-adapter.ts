import React from 'react'
import { Restaurant } from '../../core/domain/models/restaurant'
import { RestaurantStats } from '../../core/domain/models/restaurant-stats'
import { RestaurantUseCase } from '../../core/domain/usecases/restaurant-usecase'
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
    this.handleLoadStats()
    //this.handleLoadRestaurant()
  }

  handleLoadStats(): void {
    this.restaurantService.stats().then(stats => this.setState({ stats }))
    .catch(this.handleLoadStatsError)
  }

  handleLoadRestaurant(): void {
    this.restaurantService.load().then(restaurants => this.setState({ restaurants }))
    .catch(this.handleLoadRestaurantError) 
  }

  abstract handleLoadStatsError(error: Error): void

  abstract handleLoadRestaurantError(error: Error): void
  
}