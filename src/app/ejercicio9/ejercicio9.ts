import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio9',
  standalone: true,
  templateUrl: './ejercicio9.html',
  styleUrl: './ejercicio9.css'
})
export class Ejercicio9 {
  mostrarImagen = true;

  toggleImagen() {
    this.mostrarImagen = !this.mostrarImagen;
  }
}
