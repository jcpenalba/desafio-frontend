import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ClientService } from 'src/app/Services/client.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers:[ ClientService ],
      imports:[
          HttpClientTestingModule,
          MatAutocompleteModule
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it("should search", () => {
//     const textToSearch = "l";
//     component.control.setValue(textToSearch);
//     const result =[
//                   {
//                       "id": 1,
//                       "name": "Leanne Graham",
//                       "username": "Bret",
//                       "email": "Sincere@april.biz",
                      
//                       "phone": "1-770-736-8031 x56442",
//                       "website": "hildegard.org"
//       }
//   ]
//     //component.Filter(textToSearch);
//     component.ShowCard();
//     let spy = spyOn(component, 'Filter')
//     expect(spy).toHaveBeenCalled()
//   } )
// });
