import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Client } from '../Models/client/client.module';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }
  
  opts: Client[] = [];
 
    Search() {
          return this.opts.length ?
            of(this.opts) :
            this.http.get<Client[]>('https://jsonplaceholder.typicode.com/users').pipe(tap(data => this.opts = data))
    }
}
