import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  @Optional()
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}
