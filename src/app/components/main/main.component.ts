import { Component, OnInit } from '@angular/core';
import { DiscogsService } from '../../services/discogs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  releaseData: any[] = [];
  isDataLoaded: boolean = false;

  constructor(private discogsService: DiscogsService) {}

  ngOnInit() {
    if (!this.isDataLoaded) {
      this.getReleaseData();
    }
  }

  getReleaseData() {
    this.discogsService.getLatestReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.releaseData = data.results || []; // Actualizar el array de resultados (manejar caso vacío)
        this.isDataLoaded = true; // Marcar los datos como cargados
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
