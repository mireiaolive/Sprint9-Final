import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  clickedRelease: any | null = null;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.clickedRelease = this.counterService.getClickedRelease();
  }
}
