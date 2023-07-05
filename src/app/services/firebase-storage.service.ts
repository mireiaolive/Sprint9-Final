import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService {
  private storage: any;

  constructor(firebaseApp: FirebaseApp) {
    this.storage = getStorage(firebaseApp);
  }

  uploadImage(image: File): Promise<string> {
    const storageRef = ref(this.storage, 'profile_images/' + image.name);
    return uploadBytes(storageRef, image).then(() => {
      return getDownloadURL(storageRef);
    });
  }
}
