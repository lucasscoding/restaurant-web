import {HttpClient} from '../../../../src/core/data/protocols/http-client';
import {RestaurantUseCase} from '../../../../src/core/domain/usecases/restaurant-usecase';
import {hostConfig} from '../mocks/configs/env-config';
import {HttpClientStub} from '../mocks/stubs/http-client-stub';
import {RestaurantService} from '../../../../src/core/data/usecases/restaurant-service';

describe('RestaurantService', () => {
  let restaurantService: RestaurantUseCase;
  let httpClientStub: HttpClient;

  beforeEach(() => {
    httpClientStub = new HttpClientStub();
    restaurantService = new RestaurantService(hostConfig, httpClientStub);
  });

  it('shoud load and return five itens in array', async () => {
    const mock = Array(10).fill(0);
    jest
      .spyOn(httpClientStub, 'send')
      .mockResolvedValueOnce({statusCode: 200, body: {restaurants: mock}});
    const result = await restaurantService.load();
    expect(5).toEqual(result.length);
  });

  it('should re throws the error when load restaurants', async () => {
    jest.spyOn(httpClientStub, 'send').mockImplementationOnce(() => {
      throw new Error();
    });
    const result = restaurantService.load();
    await expect(result).rejects.toThrow();
  });

  it('should load stats of restaurants', async () => {
    jest.spyOn(httpClientStub, 'send').mockResolvedValueOnce({
      statusCode: 200,
      body: {countries: 10, cities: 20, restaurants: 30},
    });
    const result = await restaurantService.stats();
    expect(result).toBeTruthy();
    expect(result.countries).toBe(10);
    expect(result.cities).toBe(20);
    expect(result.restaurants).toBe(30);
  });

  it('should re throws the error when load restaurants', async () => {
    jest.spyOn(httpClientStub, 'send').mockImplementationOnce(() => {
      throw new Error();
    });
    const result = restaurantService.stats();
    await expect(result).rejects.toThrow();
  });
});
