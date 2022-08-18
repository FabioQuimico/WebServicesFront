import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../autenticacao/token.service';

import { compra } from './@types/compra';
import { compraCompleta } from './@types/compraCompleta';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private apiUrl: string;
  private compras = [] as compra[];
  private headers: HttpHeaders | undefined;

  constructor(private http: HttpClient, private tokenService: TokenService) { 
    this.apiUrl = 'https://cartao-fiap.herokuapp.com';
  }

// chamada do Fabio - retorna 401
/*   getCompras(mes: number, ano: number) {
    let comprasCompletas = [] as compraCompleta[];
    return this.http.get<compraCompleta[]>(`${this.apiUrl}/extrato/${mes}/${ano}`);
  } */

  // chamada gabriel com Token - retorna 404
  getCompras(mes: number, ano: number):Observable<compraCompleta[]> {
    let comprasCompletas = [] as compraCompleta[];
    const token = this.tokenService.retornaToken();

    //const headers = new HttpHeaders().append('x-access-token' , `${token}`);
    if (this.headers == null) {
    this.headers = new HttpHeaders().append('Authorization' , `Bearer ${token}`);
    }
    const headers = this.headers;
    // const headers = new HttpHeaders().append('Token' , `${token}`);
    return this.http.get<compraCompleta[]>(`${this.apiUrl}/extrato/${mes}/${ano}`, {
      headers,
    });
  }
}
