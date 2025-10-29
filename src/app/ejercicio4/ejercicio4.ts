import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio4.html',
  styleUrl: './ejercicio4.css'
})
export class Ejercicio4 {
  contador: number = 0;

  incrementar() {
    this.contador++;
  }
}
