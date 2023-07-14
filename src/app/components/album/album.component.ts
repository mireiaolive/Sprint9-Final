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
  releaseDetails: any = {};
  releaseImageUrls: string[] = [];

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

        const releaseImageUrls =
          data.images?.map((image: any) => image.uri) || [];

        this.releaseImageUrls = releaseImageUrls;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getFullImageUrl(image: any): string {
    return `https://img.discogs.com/${image.uri}`;
  }

  playTrack(track: any) {
    track.isPlaying = !track.isPlaying;

    // Implement your logic to play or pause the track here
    if (track.isPlaying) {
      // Play the track
      console.log('Playing track:', track.title);
    } else {
      // Pause the track
      console.log('Pausing track:', track.title);
    }
  }
}
