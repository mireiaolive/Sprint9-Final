import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  // Obtén la lista de releases agregados en el ProfileComponent
  wishlist: any[] = []; // Puedes recibir esta lista desde el servicio o directamente del ProfileComponent

  constructor() {}

  // Resto del código...
}
