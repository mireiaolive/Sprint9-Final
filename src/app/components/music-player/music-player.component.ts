import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent {
  currentProgress: number = 0;
  isPlaying: boolean = false;
  isLoading: boolean = false;

  togglePlayback() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      // Lógica para iniciar la reproducción de la música
    } else {
      // Lógica para pausar la reproducción de la música
    }
  }

  previousTrack() {
    // Lógica para ir a la pista anterior
  }

  nextTrack() {
    // Lógica para ir a la siguiente pista
  }
}
