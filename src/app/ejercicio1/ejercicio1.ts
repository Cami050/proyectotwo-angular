import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio1.html',
  styleUrl: './ejercicio1.css'
})
export class Ejercicio1 {
  mensaje = '';

  mostrarMensaje() {
    this.mensaje = '¡Bienvenido a mi primera app en Angular! 🎉';
  }
}
