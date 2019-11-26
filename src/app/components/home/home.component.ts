import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../../services/game-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nomeJogador1: string = "Jogador 1";
  nomeJogador2: string = "Jogador 2";
  jogador1Conectado: Boolean = false;
  jogador2Conectado: Boolean = false;
  prontoParaIniciar: Boolean = false;
  percentualProgresso: Number = 0;
  statusInicio: Observable<string>;

  constructor(private gameService: GameServiceService) {
    gameService.getStatus().subscribe((res: any) => {
      this.statusInicio = res.message;

      if (res.message === "Aguardando jogadores...") {
        this.jogador1Conectado = false;
        this.jogador2Conectado = false;
        this.prontoParaIniciar = false;
        this.percentualProgresso = 0;
        (document.querySelector(".progress-bar") as HTMLElement).style.cssText = "width: 0%"
      }

      if (res.message === "Aguardando jogador 1...") {
        this.jogador1Conectado = false;
        this.jogador2Conectado = true;
        this.prontoParaIniciar = false;
        this.percentualProgresso = 50;
        (document.querySelector(".progress-bar") as HTMLElement).style.cssText = "width: 50%"

        gameService.getJogador2().subscribe((resp: any) => {
          if(resp.sucess){
            this.nomeJogador2 = resp.object.nome
          }
        })
      }

      if (res.message === "Aguardando jogador 2...") {
        this.jogador1Conectado = true;
        this.jogador2Conectado = false;
        this.prontoParaIniciar = false;
        this.percentualProgresso = 50;
        (document.querySelector(".progress-bar") as HTMLElement).style.cssText = "width: 50%"

        gameService.getJogador1().subscribe((resp: any) => {
          if(resp.sucess){
            this.nomeJogador1 = resp.object.nome
          }
        })
      }

      if (res.message === 'Pronto para iniciar') {
        this.jogador1Conectado = true;
        this.jogador2Conectado = true;
        this.prontoParaIniciar = true;
        this.percentualProgresso = 100;
        (document.querySelector(".progress-bar") as HTMLElement).style.cssText = "width: 100%"
      }
    });
  }

  ngOnInit() {


  }

}
