import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FirebaseStorageService } from '../../services/firebase-storage.service';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any;
  selectedImage: File | null = null;
  showImageModal: boolean = false;
  imageUrl: string | null = null;
  releaseId: string | null = null;

  collections: any[] = [];
  wishlist: any[] = [];
  following: any[] = [];

  collectionsCount: number = 0;
  wishlistCount: number = 0;
  followingCount: number = 0;

  constructor(
    private userService: UserService,
    private storageService: FirebaseStorageService,
    private route: ActivatedRoute,
    private counterService: CounterService
  ) {
    this.user = this.userService.getCurrentUser();
    this.collectionsCount = this.counterService.getCollectionsCount();
    this.wishlistCount = this.counterService.getWishlistCount();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.releaseId = params.get('releaseId');
    });
    this.collectionsCount = this.counterService.getCollectionsCount();
    this.wishlistCount = this.counterService.getWishlistCount();
  }

  addToCollections(release: any) {
    this.collections.push(release);
    this.counterService.incrementCollectionsCount();
  }

  addToWishlist(release: any) {
    this.wishlist.push(release);
    this.counterService.incrementWishlistCount();
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      this.selectedImage = file;
      this.showImageModal = true;
    }
  }

  selectImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  closeImageModal() {
    this.showImageModal = false;
    this.selectedImage = null;
  }

  uploadSelectedImage() {
    if (this.selectedImage) {
      this.storageService
        .uploadImage(this.selectedImage)
        .then((downloadUrl: string) => {
          console.log('Image uploaded:', downloadUrl);
          this.imageUrl = downloadUrl;
        })
        .catch((error: any) => {
          console.error('Image upload failed:', error);
        })
        .finally(() => {
          this.closeImageModal();
        });
    }
  }
}
