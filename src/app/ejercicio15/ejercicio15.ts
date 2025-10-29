import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio15',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio15.html',
  styleUrl: './ejercicio15.css'
})
export class Ejercicio15 {
  paises: string[] = ['Colombia', 'México', 'Argentina'];
  nuevoPais: string = '';

  agregarPais() {
    if (this.nuevoPais.trim() !== '') {
      this.paises.push(this.nuevoPais.trim());
      this.nuevoPais = '';
    }
  }

  eliminarPais(index: number) {
    this.paises.splice(index, 1);
  }
}
