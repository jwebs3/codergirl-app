import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.angularbootcamp.com/videos';

@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {

  angularVideos: any [] = [];

  constructor(http: HttpClient) {

    http
    .get<any []>(API_URL)
    .subscribe(videos => this.angularVideos = videos);
  }

  ngOnInit() {
  }

}

