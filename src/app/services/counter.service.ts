import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private collectionsCount: number = 0;
  private wishlistCount: number = 0;

  constructor() {}

  incrementCollectionsCount() {
    this.collectionsCount++;
  }

  getCollectionsCount() {
    return this.collectionsCount;
  }

  incrementWishlistCount() {
    this.wishlistCount++;
  }

  getWishlistCount() {
    return this.wishlistCount;
  }
}
