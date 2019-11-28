import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameServiceService } from '../../services/game-service.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

  jogador1Form = new FormGroup({
    nome: new FormControl(''),
  });

  jogador2Form = new FormGroup({
    nome: new FormControl(''),
  });

  constructor(private gameService: GameServiceService, private toastr: ToastrService, private router: Router) {
    this.verificarStatus();
  }

  ngOnInit() {

  }

  verificarStatus() {
    this.gameService.getStatus().subscribe((res: any) => {
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

        this.gameService.getJogador2().subscribe((resp: any) => {
          if (resp.sucess) {
            this.nomeJogador2 = resp.object.nome
            this.jogador2Form.setValue({ nome: this.nomeJogador2 });
          }
        })
      }

      if (res.message === "Aguardando jogador 2...") {
        this.jogador1Conectado = true;
        this.jogador2Conectado = false;
        this.prontoParaIniciar = false;
        this.percentualProgresso = 50;
        (document.querySelector(".progress-bar") as HTMLElement).style.cssText = "width: 50%"

        this.gameService.getJogador1().subscribe((resp: any) => {
          if (resp.sucess) {
            this.nomeJogador1 = resp.object.nome
            this.jogador1Form.setValue({ nome: this.nomeJogador1 });
          }
        })
      }

      if (res.message === 'Pronto para iniciar') {
        this.jogador1Conectado = true;
        this.jogador2Conectado = true;
        this.prontoParaIniciar = true;
        this.percentualProgresso = 100;

        this.gameService.getJogador1().subscribe((resp: any) => {
          if (resp.sucess) {
            this.jogador1Form.setValue({ nome: resp.object.nome })
          }
        });

        this.gameService.getJogador2().subscribe((resp: any) => {
          if (resp.sucess) {
            this.jogador2Form.setValue({ nome: resp.object.nome })
          }
        });

        (document.querySelector(".progress-bar") as HTMLElement).style.cssText = "width: 100%"
      }
    });
  }

  confirmarJogador1() {
    this.gameService.confirmarJogador1(this.jogador1Form.value.nome).subscribe((resp: any) => {
      if (resp.sucess) {
        this.toastr.success(resp.message, "Legal")
        this.verificarStatus();
      } else {
        this.toastr.error("Ocorreu um erro!", resp.message)
      }
    })
  }

  confirmarJogador2() {
    this.gameService.confirmarJogador2(this.jogador2Form.value.nome).subscribe((resp: any) => {
      if (resp.sucess) {
        this.toastr.success(resp.message, "Legal")
        this.verificarStatus();
      } else {
        this.toastr.error("Ocorreu um erro!", resp.message)
      }
    })
  }

  iniciarJogo() {
    if (this.prontoParaIniciar) {
      this.router.navigate(['/game']);
    }
  }
}
