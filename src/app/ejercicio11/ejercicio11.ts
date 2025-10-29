import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio11',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio11.html',
  styleUrl: './ejercicio11.css'
})
export class Ejercicio11 {
  mensaje: string = '';

  mostrarAlerta() {
    if (this.mensaje.trim() !== '') {
      alert(`Tu mensaje es: ${this.mensaje}`);
    } else {
      alert('Por favor, escribe algo antes de continuar.');
    }
  }
}
