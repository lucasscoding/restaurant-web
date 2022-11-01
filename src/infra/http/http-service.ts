import { HttpClient, HttpRequest, HttpResponse } from '@/core/data/protocols/http-client'

export class HttpClientService implements HttpClient {
  async send(request: HttpRequest): Promise<HttpResponse<any>> {
    const { method, headers } = request
    const url = request.params ? request.url + '?' + new URLSearchParams(request.params) : request.url
    try {
      const response = await fetch(url, { method, headers })
      return { statusCode: response.status, body: await response.json() }
    } catch(error: any) {
      throw new Error('can\'t connect with the Api')
    }
  }
}