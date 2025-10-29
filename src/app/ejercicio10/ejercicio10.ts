import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio10',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio10.html',
  styleUrl: './ejercicio10.css'
})
export class Ejercicio10 {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | string = '';

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    this.resultado = this.numero2 !== 0 ? (this.numero1 / this.numero2).toFixed(2) : 'No se puede dividir por 0';
  }
}
