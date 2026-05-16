import { Component, signal } from '@angular/core';
import { Calcu } from "./calcu/calcu";

@Component({
  selector: 'app-root',
  imports: [ Calcu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculadora');
}
