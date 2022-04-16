import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CEPServiceService } from './Service/cepservice.service';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    CEPServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
