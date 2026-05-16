import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calcu',
  imports: [FormsModule],
  templateUrl: './calcu.html',
  styleUrl: './calcu.css'
})
export class Calcu {

  numero1 = 0;
  numero2 = 0;
  resultado = 0;

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    if (this.numero2 === 0) {
      alert('No se puede dividir para cero');
      return;
    }

    this.resultado = this.numero1 / this.numero2;
  }
}
