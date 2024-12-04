import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  imports: [],
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css'
})
export class Assignment3Component {
  name: WritableSignal<string> = signal("Faizan Raza");
}
