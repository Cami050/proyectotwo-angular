import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio12',
  standalone: true,
  templateUrl: './ejercicio12.html',
  styleUrl: './ejercicio12.css'
})
export class Ejercicio12 {
  textoBoton: string = 'Haz clic aquí';

  cambiarTexto() {
    this.textoBoton = this.textoBoton === 'Haz clic aquí'
      ? '¡Gracias por hacer clic!'
      : 'Haz clic aquí';
  }
}
