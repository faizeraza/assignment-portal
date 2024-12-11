import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  constructor(private renderer: Renderer2) {}
  
  // ngOnInit(): void {
  //   const contPrincipal = document.querySelector('.cont_principal');
  //   if (contPrincipal) {
  //     this.renderer.addClass(contPrincipal, 'cont_error_active');
  //   } else {
  //     console.error('Element .cont_principal not found');
  //   }
  // }

}
