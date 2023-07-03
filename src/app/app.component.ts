import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  releaseData: any;
  constructor(public userService: UserService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  onClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/main']);
      })
      .catch((error) => console.log(error));
  }
}
