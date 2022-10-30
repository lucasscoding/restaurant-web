import { UrlConfig } from '../../../../src/domain/models/url-configuration'

const config: UrlConfig = {
  development: {
    HOST_URL: '',
    URL: {
      STATS: '/stats',
      RESTAURANT: '/restaurants',
      CITY: '/cities',
      COUNTRY: '/countries'
    }
  }
}

export const hostConfig = config['development']