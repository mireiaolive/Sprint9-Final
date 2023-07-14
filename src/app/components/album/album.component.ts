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

        // Obtener las URLs de las imágenes
        const releaseImageUrls =
          data.images?.map((image: any) => image.uri) || [];

        // Asignar las URLs de las imágenes a la propiedad releaseImagesUrls
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
}
