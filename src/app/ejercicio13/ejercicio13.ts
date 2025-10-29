import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio13',
  standalone: true,
  templateUrl: './ejercicio13.html',
  styleUrl: './ejercicio13.css'
})
export class Ejercicio13 {
  tamanoCaja: number = 100; // tamano inicial en píxeles

  aumentar() {
    if (this.tamanoCaja < 300) { // límite máximo
      this.tamanoCaja += 20;
    }
  }

  disminuir() {
    if (this.tamanoCaja > 40) { // límite mínimo
      this.tamanoCaja -= 20;
    }
  }
}
