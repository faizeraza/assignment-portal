import { Component, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  imports: [],
  templateUrl: './assignment2.component.html',
  styleUrl: './assignment2.component.css'
})
export class Assignment2Component {
  name: WritableSignal<string> = signal("Faizan Raza");
}