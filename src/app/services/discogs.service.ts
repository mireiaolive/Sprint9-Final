import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscogsService {
  private discogsApiKey = 'mQEnlQEdgWyiTFoxmRxX';
  private discogsApiUrl = 'https://api.discogs.com';

  constructor(private http: HttpClient) {}

  getLatestReleases(): Observable<any> {
    const url = `${this.discogsApiUrl}/database/search`;
    const headers = {
      Authorization: `Discogs key=${this.discogsApiKey}, secret=MDRwNaHPKbavUwquBsuZcbGtSDTLXfzY`,
    };
    const params = {
      genre: ['electronic'],
      sort: 'year',
      sort_order: 'desc',
      per_page: '40',
    };

    return this.http.get(url, { headers, params });
  }
}
