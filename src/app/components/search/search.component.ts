import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscogsService } from '../../services/discogs.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResults: any[] = [];
  hoveredReleaseIndex: number = -1;

  constructor(
    private route: ActivatedRoute,
    private discogsService: DiscogsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const searchTerm = params['term'];
      if (searchTerm) {
        this.search(searchTerm);
      }
    });
  }

  search(searchTerm: string) {
    this.discogsService.search(searchTerm).subscribe(
      (data: any) => {
        this.searchResults = data.results;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  goToAlbum(releaseId: string) {
    if (releaseId) {
      this.router.navigateByUrl(`/album/${releaseId}`);
    }
  }
}
