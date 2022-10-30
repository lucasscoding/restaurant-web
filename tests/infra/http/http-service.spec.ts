import { HttpClient } from '../../../src/data/protocols/http-client'
import { HttpClientService } from '../../../src/infra/http/http-service'

describe('HttpClientService', () => {
  let url: string = 'http://localhost:8080'
  let httpClientService: HttpClient

  beforeEach(() => {
    httpClientService = new HttpClientService()
  })

  it('should to make a http request and return 200', async () => {
    jest.spyOn(httpClientService, 'send').mockResolvedValueOnce({statusCode: 200})
    const response = await httpClientService.send({ url })
    expect(200).toBe(response.statusCode)
  })

  it('should to make a http request and return 404', async () => {
    const response = await httpClientService.send({ url })
    expect(404).toBe(response.statusCode)
  })

  it('should to make a http request and return throw', async () => {
    const response = httpClientService.send({ url: '' })
    await expect(response).rejects.toThrow(new Error('can\'t connect with the Api'))
  })
})