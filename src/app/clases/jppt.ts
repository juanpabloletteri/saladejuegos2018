export class JuegoPPT {

    eleccionMaquina: number = 0;
    //1 piedra 2 papel 3 tijeras
    //eleccionJugador: number = 0;
    resultado: string;

    constructor() { }

    public apostar(eleccionJugador: number) {

        /* if (eleccionJugador == this.eleccionMaquina) {
             return 'empate';
         }
         else if (eleccionJugador == 1 && this.eleccionMaquina == 2) {
             return 'perdio';
         }
         else if (eleccionJugador == 1 && this.eleccionMaquina == 3) {
             return 'gano';
         }
         else if (eleccionJugador == 2 && this.eleccionMaquina == 3) {
             return 'perdio';
         }
         else if (eleccionJugador == 2 && this.eleccionMaquina == 1) {
             return 'gano';
         }
         else if (eleccionJugador == 3 && this.eleccionMaquina == 1) {
             return 'perdio';
         }
         else if (eleccionJugador == 3 && this.eleccionMaquina == 2) {
             return 'gano';
         }*/
        ////////////////////////////
        if (eleccionJugador == this.eleccionMaquina) {
            return 'empate';
        }
        else if (eleccionJugador == 1 && this.eleccionMaquina == 2 || eleccionJugador == 2 && this.eleccionMaquina == 3 || eleccionJugador == 3 && this.eleccionMaquina == 1) {
            return 'perdio';
        }
        else if (eleccionJugador == 1 && this.eleccionMaquina == 3 || eleccionJugador == 2 && this.eleccionMaquina == 1 || eleccionJugador == 3 && this.eleccionMaquina == 2) {
            return 'gano';
        }


    }
    public generarEleccion() {
        this.eleccionMaquina = Math.floor((Math.random() * 3) + 1);
        console.info('eleccion Maquina:' + this.eleccionMaquina);

    }

}