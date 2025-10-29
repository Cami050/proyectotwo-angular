import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio6',
  standalone: true,
  templateUrl: './ejercicio6.html',
  styleUrl: './ejercicio6.css'
})
export class Ejercicio6 {
  mostrar = true;

  alternarVisibilidad() {
    this.mostrar = !this.mostrar;
  }
}
