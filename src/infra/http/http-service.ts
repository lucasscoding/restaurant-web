import { HttpClient, HttpRequest, HttpResponse } from '../../data/protocols/http-client'

export class HttpClientService implements HttpClient {
  async send(request: HttpRequest): Promise<HttpResponse<any>> {
    const { method, headers } = request
    const url = request.params ? request.url + '?' + new URLSearchParams(request.params) : request.url
    const response = await fetch(url, { method, headers})
    return await response.json()
  }
}