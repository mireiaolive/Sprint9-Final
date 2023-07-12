import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscogsService } from '../../services/discogs.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  releaseId: string = '';
  releaseDetails: any;

  constructor(
    private route: ActivatedRoute,
    private discogsService: DiscogsService
  ) {}

  ngOnInit() {
    this.releaseId = this.route.snapshot.paramMap.get('releaseId') || '';
    this.getReleaseDetails(this.releaseId);
  }

  getReleaseDetails(releaseId: string) {
    this.discogsService.getReleaseDetails(releaseId).subscribe(
      (data: any) => {
        console.log(data);
        this.releaseDetails = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
