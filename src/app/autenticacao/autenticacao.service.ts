import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

export interface Body {
  token:string
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  autenticar(email:string, senha:string): Observable<HttpResponse<any>>{
    return this.httpClient.post('https://cartao-fiap.herokuapp.com/usuarios/login' , {
      email: email,
      senha: senha,
    },
    { observe: 'response'})
    .pipe(
      tap((res:any) => {
        
        console.log(res.body.token);
        const authToken = res.body.token;
        this.usuarioService.salvaToken(authToken);
      })
      )
  }
}
