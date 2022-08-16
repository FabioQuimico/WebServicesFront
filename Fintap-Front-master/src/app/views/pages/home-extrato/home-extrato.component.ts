import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-extrato',
  templateUrl: './home-extrato.component.html',
  styleUrls: ['./home-extrato.component.css']
})
export class HomeExtratoComponent implements OnInit {

  // nomeCliente deve vir da tela de Login
  nomeCliente = "Página de extrato do cliente";
  // mes e ano devem vir da data atual
  mes: number = 0;
  ano: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    if (this.mes == 0) {
      this.mes = new Date().getMonth() + 1;
    }
    if (this.ano == 0) {
      this.ano = new Date().getFullYear();
    }
  }

  setMes(mes: number): void {
    this.mes = mes;
  }
  setAno(ano: number): void {
    this.ano = ano;
  }

}
