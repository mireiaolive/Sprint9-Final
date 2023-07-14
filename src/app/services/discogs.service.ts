import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscogsService {
  private discogsApiKey = 'mQEnlQEdgWyiTFoxmRxX';
  private discogsApiUrl = 'https://api.discogs.com';
  private accessToken = 'MDRwNaHPKbavUwquBsuZcbGtSDTLXfzY';

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
    const releaseUrl = `${this.discogsApiUrl}/releases/${releaseId}`;
    const headers = new HttpHeaders({
      'User-Agent': 'MyDiscogsApp/1.0',
      'Content-Type': 'application/json',
      Accept: 'application/vnd.discogs.v2.0+json',
      Authorization: `Discogs key=${this.discogsApiKey}, secret=MDRwNaHPKbavUwquBsuZcbGtSDTLXfzY`,
    });

    return this.http.get(releaseUrl, { headers });
  }

  getReleaseImages(imageUrls: string[]): Observable<any[]> {
    const observables: Observable<any>[] = imageUrls.map((url) =>
      this.http.get(url)
    );

    return forkJoin(observables);
  }
}
