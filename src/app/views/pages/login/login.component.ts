import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  senha='';

  constructor(private authService: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.email, this.senha)
    .subscribe({
      next:(v) => this.router.navigate(['home-extrato']),
      error:(e) => {alert('Usuario ou senha invalida'),
      console.log(e); }
    }
    )
  }

}
