import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }
  
  opts: any = [];
 
    Search() {
          return this.opts.length ?
            of(this.opts) :
            this.http.get('https://jsonplaceholder.typicode.com/users').pipe(tap(data => this.opts = data))
    }
}
