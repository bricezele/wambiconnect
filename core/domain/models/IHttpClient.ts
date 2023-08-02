export type HttpHeaders = { [key: string]: string }

export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

export interface IHttpClient {
  baseUrl: string
  post<R>(url: string, body: object, header?: HttpHeaders, responseType?: ResponseType): Promise<R>
  put<R>(url: string, body: object, header?: HttpHeaders, responseType?: ResponseType): Promise<R>
  get<R>(url: string, header?: HttpHeaders, responseType?: ResponseType): Promise<R>
  delete<R>(url: string, header?: HttpHeaders, responseType?: ResponseType): Promise<R>
}
