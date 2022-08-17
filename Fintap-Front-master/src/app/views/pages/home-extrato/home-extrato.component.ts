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
  isSelectedMes: number = 0;
  isSelectedAno: number = 0;
  meses:number[]= [1,2,3,4,5,6,7,8,9,10,11,12] 
  mesesNome:string[]= ["Jan", "Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"] 
  anos:number[]= [2020,2021,2022] 
  constructor() {
  }

  ngOnInit(): void {
    if (this.mes == 0) {
      this.mes = new Date().getMonth() + 1;
      this.isSelectedMes = this.mes;
    }
    if (this.ano == 0) {
      this.ano = new Date().getFullYear();
      this.isSelectedAno = this.ano;
    }
  }

  setMes(mes: number): void {
    this.mes = mes;
    this.isSelectedMes = mes;
    console.log(this.isSelectedMes+" = "+ mes)
  }
  setAno(ano: number): void {
    this.ano = ano;
    this.isSelectedAno = ano;
    console.log(this.isSelectedAno+" = "+ ano)
  }
  

}
