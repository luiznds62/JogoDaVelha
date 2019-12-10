import { Component, OnInit } from "@angular/core";
import { GameServiceService } from "src/app/services/game-service.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  jogador1: string = "";
  jogador2: string = "";
  jogadorAtual: string = "";
  imgJ1: string = "assets/xis.svg";
  imgJ2: string = "assets/circle.svg";
  matriz: Object = {
    a1: { jogador1: false, jogador2: false },
    a2: { jogador1: false, jogador2: false },
    a3: { jogador1: false, jogador2: false },
    b1: { jogador1: false, jogador2: false },
    b2: { jogador1: false, jogador2: false },
    b3: { jogador1: false, jogador2: false },
    c1: { jogador1: false, jogador2: false },
    c2: { jogador1: false, jogador2: false },
    c3: { jogador1: false, jogador2: false }
  };

  constructor(private gameService: GameServiceService) {}

  atualizarMatriz() {
    this.gameService.buscarCampos().subscribe((resp: any) => {
      console.log(resp.object);
    });
  }

  buscarJogadores() {
    this.gameService.getJogador1().subscribe((resp: any) => {
      this.jogador1 = resp.object.nome;
      this.jogadorAtual = resp.object.nome;
    });

    this.gameService.getJogador2().subscribe((resp: any) => {
      this.jogador2 = resp.object.nome;
    });
  }

  marcarCampo(campo) {
    console.log(campo);
    if (this.jogadorAtual == this.jogador1) {
      this.jogadorAtual = this.jogador2;
    } else {
      this.jogadorAtual = this.jogador1;
    }

    var matriz = [];
    matriz.push(this.matriz);

    switch (campo) {
      case "a1":
        if (this.jogadorAtual == this.jogador1) {
          matriz[0].a1.jogador1 = true;
        } else {
          matriz[0].a1.jogador1 = false;
        }

        if (this.jogadorAtual == this.jogador2) {
          matriz[0].a1.jogador2 = true;
        } else {
          matriz[0].a1.jogador2 = false;
        }

        this.gameService.marcarCampo("a1", this.jogadorAtual).subscribe((resp: any)=> {
          console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`)
        });
        break;
      case "a2":
        if (this.jogadorAtual == this.jogador1) {
          matriz[0].a2.jogador1 = true;
        } else {
          matriz[0].a2.jogador1 = false;
        }

        if (this.jogadorAtual == this.jogador2) {
          matriz[0].a2.jogador2 = true;
        } else {
          matriz[0].a2.jogador2 = false;
        }
        break;
      case "a3":
        if (this.jogadorAtual == this.jogador1) {
          matriz[0].a3.jogador1 = true;
        } else {
          matriz[0].a3.jogador1 = false;
        }

        if (this.jogadorAtual == this.jogador2) {
          matriz[0].a3.jogador2 = true;
        } else {
          matriz[0].a3.jogador2 = false;
        }
        break;
      case "b1":
        if (this.jogadorAtual == this.jogador1) {
          matriz[0].b1.jogador1 = true;
        } else {
          matriz[0].b1.jogador1 = false;
        }

        if (this.jogadorAtual == this.jogador2) {
          matriz[0].b1.jogador2 = true;
        } else {
          matriz[0].b1.jogador2 = false;
        }
        break;
      case "b2":
        if (this.jogadorAtual == this.jogador1) {
          matriz[0].b2.jogador1 = true;
        } else {
          matriz[0].b2.jogador1 = false;
        }

        if (this.jogadorAtual == this.jogador2) {
          matriz[0].b2.jogador2 = true;
        } else {
          matriz[0].b2.jogador2 = false;
        }
        break;
      case "b3":
        if (this.jogadorAtual == this.jogador1) {
          matriz[0].b3.jogador1 = true;
        } else {
          matriz[0].b3.jogador1 = false;
        }

        if (this.jogadorAtual == this.jogador2) {
          matriz[0].b3.jogador2 = true;
        } else {
          matriz[0].b3.jogador2 = false;
        }
        break;
      case "c1":
        if (this.jogadorAtual == this.jogador1) {
          matriz[0].c1.jogador1 = true;
        } else {
          matriz[0].c1.jogador1 = false;
        }

        if (this.jogadorAtual == this.jogador2) {
          matriz[0].c1.jogador2 = true;
        } else {
          matriz[0].c1.jogador2 = false;
        }
        break;
      case "c2":
        if (this.jogadorAtual == this.jogador1) {
          matriz[0].c2.jogador1 = true;
        } else {
          matriz[0].c2.jogador1 = false;
        }

        if (this.jogadorAtual == this.jogador2) {
          matriz[0].c2.jogador2 = true;
        } else {
          matriz[0].c2.jogador2 = false;
        }
        break;
      case "c3":
        if (this.jogadorAtual == this.jogador1) {
          matriz[0].c3.jogador1 = true;
        } else {
          matriz[0].c3.jogador1 = false;
        }

        if (this.jogadorAtual == this.jogador2) {
          matriz[0].c3.jogador2 = true;
        } else {
          matriz[0].c3.jogador2 = false;
        }
        break;
    }
  }

  ngOnInit() {
    this.buscarJogadores();
    this.atualizarMatriz();
  }
}
