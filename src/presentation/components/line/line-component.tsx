import { Restaurant } from '../../../domain/models/restaurant'
import './line-component.css'

type Props = {
  restaurant: Restaurant
}

export const Line: React.FC<Props> = (props: Props) => {
  return (
    <div className={'container-line'}>
      <h3>{props.restaurant.name}</h3>
      <div className={'infos'}>
        <div>
          <p>City: <code>{props.restaurant.city}</code></p>
          <p>Address: <code>{props.restaurant.address}</code></p>
          <p className={'border-node'}>Phone: {props.restaurant.phone}</p>
        </div>
      </div>
    </div>
  )
}