import { Component, OnInit } from '@angular/core';
import { DiscogsService } from '../../services/discogs.service';
import { Router } from '@angular/router';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  releaseData: any[] = [];
  isDataLoaded: boolean = false;
  hoveredReleaseIndex: number = -1;
  mainData: any[] = [
    {
      title: 'Upcoming Events',
      description: 'Description for Upcoming Events',
      image: '../../../assets/events.jpeg',
    },
    {
      title: 'For fans of Boiler Room',
      description: 'Description for For fans of Boiler Room',
      image: '../../../assets/boiler_room.jpg',
    },

    {
      title: 'What Is a Booking Agent? (Find the Right One)',
      description: 'Description for For fans of Boiler Room',
      image: '../../../assets/booking.jpeg',
    },

    {
      title: 'Podcast Andrés (ft. Moodymann)',
      description: 'Description for For fans of Boiler Room',
      image: '../../../assets/moodyman.png',
    },
    {
      title: 'EP Review Temple Rat - The Composition Of Air',
      description: 'Description for For fans of Boiler Room',
      image: 'ruta_de_la_imagen2.jpg',
    },
    {
      title: 'Special Request - Sliver feat. Novelist',
      description: 'Description for For fans of Boiler Room',
      image: 'ruta_de_la_imagen2.jpg',
    },
    {
      title: 'Youandewan - Cheap Lust',
      description: 'Description for For fans of Boiler Room',
      image: 'ruta_de_la_imagen2.jpg',
    },
    {
      title: 'Laurel Halo reveals Atlas, her album in five years',
      description: 'Description for For fans of Boiler Room',
      image: 'ruta_de_la_imagen2.jpg',
    },
  ];
  selectedRelease: any = null;

  constructor(
    private discogsService: DiscogsService,
    private router: Router,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    if (!this.isDataLoaded) {
      this.getReleaseData();
    }
  }

  getReleaseData() {
    this.discogsService.getLatestReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.releaseData = data.results || [];
        this.isDataLoaded = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToAlbum(releaseId: string) {
    if (releaseId) {
      const clickedRelease = this.releaseData.find(
        (release) => release.id === releaseId
      );
      if (clickedRelease) {
        this.counterService.setClickedRelease(clickedRelease); // Use the release object
        this.router.navigateByUrl(`/album/${releaseId}`);
      }
    }
  }

  handleBuyNowClick(release: any) {
    this.counterService.incrementCollectionsCount();
    this.counterService.setClickedRelease(release); // Use the release object
    this.router.navigateByUrl(`/profile/collections/${release.id}`);
  }

  handleWishlistClick(release: any) {
    this.counterService.incrementWishlistCount();
    this.counterService.setClickedRelease(release); // Use the release object
    this.router.navigateByUrl(`/profile/wishlist/${release.id}`);
  }
  showItemDetails(release: any) {
    this.selectedRelease = this.selectedRelease === release ? null : release;
  }
}
