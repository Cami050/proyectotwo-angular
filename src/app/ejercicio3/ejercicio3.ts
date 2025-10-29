import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3.html',
  styleUrl: './ejercicio3.css'
})
export class Ejercicio3 {
  nombre: string = '';
}
