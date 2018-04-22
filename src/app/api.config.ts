import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public Server = 'https://jsonplaceholder.typicode.com/';
  public ApiUrl = 'posts/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
