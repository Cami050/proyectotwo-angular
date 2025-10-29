import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio5.html',
  styleUrl: './ejercicio5.css'
})
export class Ejercicio5 {
  tamanoFuente: number = 16;

  aumentarTamano() {
    this.tamanoFuente += 2;
  }

  disminuirTamano() {
    if (this.tamanoFuente > 8) {
      this.tamanoFuente -= 2;
    }
  }
}
