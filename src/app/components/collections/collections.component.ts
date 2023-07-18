// collections.component.ts

import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  clickedReleaseId: string | null = null;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.clickedReleaseId = this.counterService.getClickedReleaseId();
  }
}
