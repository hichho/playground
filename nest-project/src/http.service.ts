import { Inject, Injectable, Optional } from "@nestjs/common"

@Injectable()
export class HttpService<T> {
  constructor(@Optional() @Inject("HTTP_OPTIONS") private readonly httpClient: T) {
  }
}
