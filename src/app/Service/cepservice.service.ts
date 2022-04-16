import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CEPinterface } from '../Interface/CEPinterface';

@Injectable({
  providedIn: 'root'
})
export class CEPServiceService {

  private readonly baseUrl:string ='https://viacep.com.br'

  constructor(private http:HttpClient) { }

  findCep(cep:string):Observable<CEPinterface>{
    return this.http.get<CEPinterface>(`${this.baseUrl}/ws/${cep}/json/`)
  }
}
