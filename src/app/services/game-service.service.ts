import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  base_url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getStatus() {
    return this.http.get(this.base_url + "/status")
  }

  getJogador1() {
    return this.http.get(this.base_url + "/jogador/j1")
  }

  getJogador2() {
    return this.http.get(this.base_url + "/jogador/j2")
  }

  confirmarJogador1(jogador) {
    return this.http.post(this.base_url + "/conectar/j1", {nome: jogador})
  }

  confirmarJogador2(jogador) {
    return this.http.post(this.base_url + "/conectar/j2", {nome: jogador})
  }
}
