export type HttpRequest = {
  headers?: any
  url: string
  params?: any
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE'
  body?: any
}

export type HttpResponse<T> = {
  statusCode: number
  body?: T
}

export interface HttpClient<T = any> {
  send(request: HttpRequest): Promise<HttpResponse<T>>
}