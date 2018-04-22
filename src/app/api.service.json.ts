import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()
export class ReturnJsonArrayService {
  constructor(private http: HttpClient) { }
  getJson(url): Observable<any> {
    //return this.http.get(url).map((res: Response) => res.json());
    return this.http.get(url);
    //return this.http.get("").map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || "Server Error"));
  }
}
