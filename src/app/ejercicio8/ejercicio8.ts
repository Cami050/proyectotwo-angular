import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio8.html',
  styleUrl: './ejercicio8.css'
})
export class Ejercicio8 {
  colores: string[] = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'brown'];
  colorActual: string = 'black';

  cambiarColor() {
    const indice = Math.floor(Math.random() * this.colores.length);
    this.colorActual = this.colores[indice];
  }
}
