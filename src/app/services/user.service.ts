import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth) {}

  register({ email, password, username }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: username });
      }
    );
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  isLoggedIn(): boolean {
    const user = this.auth.currentUser;
    return !!user;
  }

  getCurrentUser(): any {
    const user = this.auth.currentUser;
    if (user) {
      return {
        username: user.displayName,
        email: user.email,
      };
    } else {
      return null;
    }
  }
}
