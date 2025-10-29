import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css'
})
export class Ejercicio2 {
  texto = 'Este es el texto original.';

  cambiarTexto() {
    this.texto = '¡El texto ha cambiado! 🎉';
  }
}
