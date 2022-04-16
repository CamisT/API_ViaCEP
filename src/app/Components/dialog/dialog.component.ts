import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CEPinterface } from 'src/app/Interface/CEPinterface';
import { CEPServiceService } from 'src/app/Service/cepservice.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  cep=''
  encontrarCEP: CEPinterface | null = null

  constructor(
    public dialogRef: MatDialogRef <DialogComponent>,
    private cepServices:CEPServiceService
  ) { }

  ngOnInit(): void {
    this.cepServices.findCep(this.cep).subscribe(
     (cepBusca)=>{
      this.encontrarCEP=cepBusca 
      }
    )
  }

}
