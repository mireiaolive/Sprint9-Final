import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private collectionsCount: number = 0;
  private wishlistCount: number = 0;
  private followingCount: number = 0;
  private clickedRelease: any | null = null;
  private clickedReleaseId: string | null = null; // Add clickedReleaseId property

  constructor() {}

  incrementCollectionsCount() {
    this.collectionsCount++;
  }

  getCollectionsCount() {
    return this.collectionsCount;
  }

  getFollowingCount() {
    return this.followingCount;
  }

  incrementWishlistCount() {
    this.wishlistCount++;
  }

  getWishlistCount() {
    return this.wishlistCount;
  }

  setClickedRelease(release: any) {
    this.clickedRelease = release;
  }

  getClickedRelease() {
    return this.clickedRelease;
  }

  getClickedReleaseId() {
    return this.clickedRelease ? this.clickedRelease.id : null;
  }
}
