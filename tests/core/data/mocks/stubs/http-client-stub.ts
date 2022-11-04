import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '../../../../../src/core/data/protocols/http-client';

export class HttpClientStub implements HttpClient {
  send(request: HttpRequest): Promise<HttpResponse<any>> {
    throw new Error('Method not implemented.' + JSON.stringify(request));
  }
}
