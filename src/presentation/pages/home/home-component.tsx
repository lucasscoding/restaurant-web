import reactLogo from '../../assets/react.svg'
import { AbstractRestaurantTemplateAdapter } from '../../../main/adapters/restaurant-template-adapter'
import { Stats } from '../../components/stats/stats-component'
import './home-component.css'

export default class HomeComponent extends AbstractRestaurantTemplateAdapter {

  handleLoadStatusError(error: Error) {
    console.log(error.message)
  }

  handleLoadRestaurantError(error: Error) {
    console.log(error.message)
  }

  componentDidMount(): void {
    console.log(import.meta.env.VITE_URL_HOST_DEV, import.meta.env.PROD)
  }

  render(): any {
    return (
      <div className='App'>
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
          <Stats title={'countries'} stats={20} />
          <Stats title={'cities'} stats={2700} />
          <Stats title={'restaurants'} stats={25000} />
        </div>
        <div className={'card'}>
          <button onClick={() => this.handleLoadRestaurant()}>
            count is {JSON.stringify(this.state.restaurants)}
          </button>
        </div>
        <p className={'read-the-docs'}>
          Web Page created by <code>Lucas Lopes</code>
        </p>
      </div>
    )
  }
}
