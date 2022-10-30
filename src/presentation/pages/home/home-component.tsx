import reactLogo from '../../assets/react.svg'
import { AbstractRestaurantTemplateAdapter } from '../../../main/adapters/restaurant-template-adapter'
import { Stats } from '../../components/stats/stats-component'
import { Button } from '../../components/button/button-component'
import { Line } from '../../components/line/line-component'
import './home-component.css'

export default class HomeComponent extends AbstractRestaurantTemplateAdapter {

  constructor(props: any) {
    super(props)
  }

  handleLoadStatsError(error: Error) {
    console.log(error.message)
  }

  handleLoadRestaurantError(error: Error) {
    console.log(error.message)
  }

  render(): React.ReactNode {
    return (
      <div>
        <div>
          <a href={'https://vitejs.dev'} target={'_blank'}>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href={'https://reactjs.org'} target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Toronto Restaurants</h1>
        <div className={'container-info'}>
          <Stats title={'countries'} stats={this.state.stats.countries} />
          <Stats title={'cities'} stats={this.state.stats.cities} />
          <Stats title={'restaurants'} stats={this.state.stats.restaurants} />
          <Button title={'Top 5'} subtitle={'Toronto'} onClick={() => this.handleLoadRestaurant()}/>
        </div>
        <div className={'container-list'}>
          {!!this.state.restaurants.length && this.state.restaurants.map(restaurant => <Line restaurant={restaurant} key={restaurant.id} />)}
        </div>
        <br />
        <p className={'read-the-docs'}>
          Web page created by <code>Lucas Lopes</code>
        </p>
      </div>
    )
  }
}
