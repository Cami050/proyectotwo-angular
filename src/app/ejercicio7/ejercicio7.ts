import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  standalone: true,
  templateUrl: './ejercicio7.html',
  styleUrl: './ejercicio7.css'
})
export class Ejercicio7 {
  numeroAleatorio: number | null = null;

  generarNumero() {
    this.numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  }
}
