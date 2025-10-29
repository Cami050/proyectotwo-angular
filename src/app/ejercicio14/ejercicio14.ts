import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio14',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio14.html',
  styleUrl: './ejercicio14.css'
})
export class Ejercicio14 {
  nombre: string = '';
  edad: number | null = null;
  profesion: string = '';
  genero: string = '';
  ciudad: string = '';

  mostrar: boolean = false;

  mostrarTarjeta() {
    this.mostrar = true;
  }
}
