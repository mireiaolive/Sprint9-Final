import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private userService: UserService, private router: Router) {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
}
