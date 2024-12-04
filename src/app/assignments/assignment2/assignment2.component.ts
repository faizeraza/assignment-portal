import { Component, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  imports: [],
  template: "<p>Hello, {{name()}} !!</p>",
  styleUrl: './assignment2.component.css'
})
export class Assignment2Component {
  name: WritableSignal<string> = signal("Faizan Raza");
}
