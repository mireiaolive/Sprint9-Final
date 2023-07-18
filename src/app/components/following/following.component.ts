// following.component.ts

import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
})
export class FollowingComponent implements OnInit {
  clickedReleaseId: string | null = null;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.clickedReleaseId = this.counterService.getClickedReleaseId();
  }
}
