import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { HttpModule } from '@angular/http';



import { Configuration } from './api.config';

@Injectable()
/* export class ApiService {
 constructor(private http: HttpClient) { }

  getAll<T>(url): Observable<T> {
    //return this.http.get(url).map((res: Response) => res.json());
    return this.http.get(url);
    //return this.http.get("").map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || "Server Error"));
  }
}
  */



export class ApiService {

    constructor(private http: HttpClient) {        
    }

   
    public getAll<T>(url): Observable<T> {
        return this.http.get<T>(url);
    }
 
   public getSingle<T>(url,id: number): Observable<T> {
        return this.http.get<T>(url + id);
   }

    public add<T>(url,itemName: T): Observable<T> {
        //const toAdd = JSON.stringify({ T: itemName });
        return this.http.post<T>(url, itemName);
    }

    public update<T>(url,id: number, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(url + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(url,id: number): Observable<T> {
        return this.http.delete<T>(url + id);
    }
 
}

/*
@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}
*/
