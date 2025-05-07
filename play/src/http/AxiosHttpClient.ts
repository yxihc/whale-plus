import { HttpClient, HttpRequestConfig, HttpResponse } from './types.ts'

export class AxiosHttpClient implements HttpClient {
  request<T = unknown>(config: HttpRequestConfig): Promise<HttpResponse<T>> {


    return Promise.resolve(undefined)
  }

}
