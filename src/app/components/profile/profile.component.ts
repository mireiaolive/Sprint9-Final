import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FirebaseStorageService } from '../../services/firebase-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any;
  selectedImage: File | null = null;
  showImageModal: boolean = false;

  constructor(
    private userService: UserService,
    private storageService: FirebaseStorageService
  ) {
    this.user = this.userService.getCurrentUser();
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
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
          // Handle the download URL or update the user's profile with the image URL
          // (e.g., save it to Firebase Firestore or update the user's profile in Firebase Auth)
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
