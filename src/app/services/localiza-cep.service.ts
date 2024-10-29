import { Injectable } from '@angular/core';
import { ILocalizacao } from '../interfaces/ilocalizacao';

@Injectable({
  providedIn: 'root'
})
export class LocalizaCepService {
  constructor() { }

  async getLocalizacao(cep:string): Promise<ILocalizacao>{
    let url = `https://brasilapi.com.br/api/cep/v1/${cep}`; //url para acessar os álbuns no servidor local
    const data = await fetch(url); //faz uma requisição fetch para a url especificada
    return data.json(); //retorna os dados no formato json
  }

}
