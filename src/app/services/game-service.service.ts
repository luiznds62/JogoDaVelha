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
}
