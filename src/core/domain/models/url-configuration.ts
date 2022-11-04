export type HostConfig = {
  HOST_URL: string;
  URL: {
    STATS: string;
    RESTAURANT: string;
    CITY: string;
    COUNTRY: string;
  };
};

export type UrlConfig = {
  [name: string]: HostConfig;
};
