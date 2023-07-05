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
  imageUrl: string | null = null; // Variable para almacenar la URL de descarga de la imagen

  constructor(
    private userService: UserService,
    private storageService: FirebaseStorageService
  ) {
    this.user = this.userService.getCurrentUser();
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
          this.imageUrl = downloadUrl; // Asignar la URL de descarga a la variable imageUrl
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
