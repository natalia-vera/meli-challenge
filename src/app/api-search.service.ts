import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaSearch } from './model/respuesta-search';
import { RespuestaDetalleSearch } from './model/respuesta-detalle-search';


@Injectable({
  providedIn: 'root'
})

//Administra el consumo a las apis facilitadas
export class ApiSearchService {

  constructor(private http: HttpClient) { }

  searchUrl: string = '/api/items'

  // consume la api de search
  getSearch(query: string): Observable<RespuestaSearch> {
    return this.http.get<RespuestaSearch>(this.searchUrl + '?q=' + query);
  }

  // consume la api de detail
  getDetail(id: string): Observable<RespuestaDetalleSearch> {
    return this.http.get<RespuestaDetalleSearch>(this.searchUrl + '/' + id);
  }


}
