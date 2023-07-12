import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      Authorization: `Discogs key=${this.discogsApiKey}, secret=MDRwNaHPKbavUwquBsuZcbGtSDTLXfzY`,
    });

    const params = new HttpParams()
      .set('genre', 'electronic')
      .set('type', 'release')
      .set('sort', 'year')
      .set('sort_order', 'desc')
      .set('per_page', '21');

    return this.http.get(url, { headers, params });
  }

  getReleaseDetails(releaseId: string): Observable<any> {
    const url = `${this.discogsApiUrl}/releases/${releaseId}`;
    const headers = new HttpHeaders({
      Authorization: `Discogs key=${this.discogsApiKey}`,
    });

    return this.http.get(url, { headers });
  }
}
