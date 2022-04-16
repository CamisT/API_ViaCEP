import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cep: string = ''

  constructor(
    public dialog: MatDialog    
  ){}

  CEPtoFind: FormControl = new FormControl('') 

  openDialog(): void {
   let dialogRef = this.dialog.open(DialogComponent, {
     }) 
     dialogRef.componentInstance.cep=this.CEPtoFind.value
   }

}
