import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/Models/client/client.interface';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() persons: Client[]=[];

  constructor(public dialog : MatDialog,private renderer : Renderer2) { }
  
  ngOnInit(): void {
  }
  
  OpenDialog() {
    this.dialog.open(DialogAlertComponent, { disableClose: true });
  }

  ChangeText(index:number){
    const mydiv = document.getElementById('text'+index.toString());
    if (mydiv != undefined) {
      let text = "";
      if (mydiv.ariaExpanded=="true") {
        text = '<span>Ocultar detalhe da ação</span><span class="material-icons">expand_less</span>';
      }else{
        text = '<span>Ver detalhe da ação</span><span class="material-icons">expand_more</span>';
      }
      mydiv.innerHTML=text;
    }
  }
}
