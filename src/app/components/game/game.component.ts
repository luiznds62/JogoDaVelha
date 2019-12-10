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

  constructor(private gameService: GameServiceService) {
    setInterval(() => {
      this.atualizarMatriz()
    },1000)
  }

  atualizarMatriz() {
    this.gameService.buscarCampos().subscribe((resp: any) => {
      var m = resp.object;
      var matriz = []
      matriz.push(this.matriz);

      if (m.a1.marcado) {
        if (m.a1.jogador == this.jogador1) {
          matriz[0].a1.jogador1 = true;
          matriz[0].a1.jogador2 = false;
        } else {
          matriz[0].a1.jogador1 = false;
          matriz[0].a1.jogador2 = true;
        }
      }

      if (m.a2.marcado) {
        if (m.a2.jogador == this.jogador1) {
          matriz[0].a2.jogador1 = true;
          matriz[0].a2.jogador2 = false;
        } else {
          matriz[0].a2.jogador1 = false;
          matriz[0].a2.jogador2 = true;
        }
      }

      if (m.a3.marcado) {
        if (m.a3.jogador == this.jogador1) {
          matriz[0].a3.jogador1 = true;
          matriz[0].a3.jogador2 = false;
        } else {
          matriz[0].a3.jogador1 = false;
          matriz[0].a3.jogador2 = true;
        }
      }

      if (m.b1.marcado) {
        if (m.b1.jogador == this.jogador1) {
          matriz[0].b1.jogador1 = true;
          matriz[0].b1.jogador2 = false;
        } else {
          matriz[0].b1.jogador1 = false;
          matriz[0].b1.jogador2 = true;
        }
      }

      if (m.b2.marcado) {
        if (m.b2.jogador == this.jogador1) {
          matriz[0].b2.jogador1 = true;
          matriz[0].b2.jogador2 = false;
        } else {
          matriz[0].b2.jogador1 = false;
          matriz[0].b2.jogador2 = true;
        }
      }

      if (m.b3.marcado) {
        if (m.b3.jogador == this.jogador1) {
          matriz[0].b3.jogador1 = true;
          matriz[0].b3.jogador2 = false;
        } else {
          matriz[0].b3.jogador1 = false;
          matriz[0].b3.jogador2 = true;
        }
      }

      if (m.c1.marcado) {
        if (m.c1.jogador == this.jogador1) {
          matriz[0].c1.jogador1 = true;
          matriz[0].c1.jogador2 = false;
        } else {
          matriz[0].c1.jogador1 = false;
          matriz[0].c1.jogador2 = true;
        }
      }

      if (m.c2.marcado) {
        if (m.c2.jogador == this.jogador1) {
          matriz[0].c2.jogador1 = true;
          matriz[0].c2.jogador2 = false;
        } else {
          matriz[0].c2.jogador1 = false;
          matriz[0].c2.jogador2 = true;
        }
      }

      if (m.c3.marcado) {
        if (m.c3.jogador == this.jogador1) {
          matriz[0].c3.jogador1 = true;
          matriz[0].c3.jogador2 = false;
        } else {
          matriz[0].c3.jogador1 = false;
          matriz[0].c3.jogador2 = true;
        }
      }
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

        this.gameService
          .marcarCampo("a1", this.jogadorAtual)
          .subscribe((resp: any) => {
            console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`);
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

        this.gameService
          .marcarCampo("a2", this.jogadorAtual)
          .subscribe((resp: any) => {
            console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`);
          });
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

        this.gameService
          .marcarCampo("a3", this.jogadorAtual)
          .subscribe((resp: any) => {
            console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`);
          });
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

        this.gameService
          .marcarCampo("b1", this.jogadorAtual)
          .subscribe((resp: any) => {
            console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`);
          });
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

        this.gameService
          .marcarCampo("b2", this.jogadorAtual)
          .subscribe((resp: any) => {
            console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`);
          });
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

        this.gameService
          .marcarCampo("b3", this.jogadorAtual)
          .subscribe((resp: any) => {
            console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`);
          });
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

        this.gameService
          .marcarCampo("c1", this.jogadorAtual)
          .subscribe((resp: any) => {
            console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`);
          });
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

        this.gameService
          .marcarCampo("c2", this.jogadorAtual)
          .subscribe((resp: any) => {
            console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`);
          });
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

        this.gameService
          .marcarCampo("c3", this.jogadorAtual)
          .subscribe((resp: any) => {
            console.log(`Sucesso: ${resp.sucess} - Mensagem: ${resp.message}`);
          });
        break;
    }
  }

  ngOnInit() {
    this.buscarJogadores();
    this.atualizarMatriz();
  }
}
