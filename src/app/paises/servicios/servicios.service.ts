import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private httpClient: HttpClient) { }

  private endpoint: string = 'https://restcountries.com/v3.1/';

  buscarPais(texto: string): Observable<Pais[]> {
    return this.httpClient.get<Pais[]>(`${this.endpoint}name/${texto}`);
  }

  buscarPaisPorId(id: string): Observable<Pais[]> {
    return this.httpClient.get<Pais[]>(`${this.endpoint}alpha/${id}`);
  }
}