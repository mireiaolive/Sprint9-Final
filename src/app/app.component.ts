import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { DiscogsService } from './services/discogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  releaseData: any;
  searchTerm: string = '';

  constructor(
    public userService: UserService,
    private router: Router,
    private discogsService: DiscogsService
  ) {}

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  onClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/main']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  search() {
    if (this.searchTerm) {
      this.router.navigate(['/search'], {
        queryParams: { term: this.searchTerm },
      });
    }
  }
}
