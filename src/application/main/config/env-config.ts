import {UrlConfig} from '@/core/domain/models/url-configuration';

const config: UrlConfig = {
  development: {
    HOST_URL: import.meta.env.VITE_URL_HOST_DEV,
    URL: {
      STATS: import.meta.env.VITE_URL_HOST_DEV + '/stats',
      RESTAURANT: import.meta.env.VITE_URL_HOST_DEV + '/restaurants',
      CITY: import.meta.env.VITE_URL_HOST_DEV + '/cities',
      COUNTRY: import.meta.env.VITE_URL_HOST_DEV + '/countries',
    },
  },
  production: {
    HOST_URL: import.meta.env.VITE_URL_HOST_PROD,
    URL: {
      STATS: import.meta.env.VITE_URL_HOST_PROD + '/stats',
      RESTAURANT: import.meta.env.VITE_URL_HOST_PROD + '/restaurants',
      CITY: import.meta.env.VITE_URL_HOST_PROD + '/cities',
      COUNTRY: import.meta.env.VITE_URL_HOST_PROD + '/countries',
    },
  },
};

export const hostConfig =
  config[import.meta.env.PROD ? 'production' : 'development'];
