import { Component, Input, inject } from '@angular/core';
import { ILocalizacao } from '../../interfaces/ilocalizacao';
import { LocalizaCepService } from '../../services/localiza-cep.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  localizacaoInfos!:ILocalizacao;
  localizacaoService:LocalizaCepService = inject(LocalizaCepService);
  cep:string = ""; 

  constructor(){}

  async buscarCep(cep:string){
    this.localizacaoService.getLocalizacao(cep).then((localizacao => {this.localizacaoInfos = localizacao}));
    this.verificarCep();
  }

  async verificarCep(){
    if(/\D/.test(this.cep)){
      return this.cep = this.cep.replace(/\D/g, "");
    } else{
      return this.cep;
    }
  }

}
