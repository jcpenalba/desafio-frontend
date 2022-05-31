import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { Client } from 'src/app/Models/client/client.module';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  control = new FormControl();
  clients : Client[] = [];
  filteredOptions: Observable<any[]> | undefined;
   
  constructor(private service: ClientService) {}

   ngOnInit(): void {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
            return this.Filter(value || '');
       }) 
    )
   }
   
  Filter(val: string): Observable<any> {
    return this.service.Search()
     .pipe(
       map(response => response.filter((option: { name: string; }) => {              
         return option.name.toLowerCase().indexOf(val.trim().toLowerCase()) === 0;
       }))
     )
   }

  ShowCard(){
    let control = this.control.value;
    if (control != null && control.trim() != '' ) {
      this.Filter(control).subscribe( value => {
        this.clients = value;        
      });      
    }
  }

}
