
import { Component, AfterViewInit, Input } from '@angular/core';
import videojs from 'video.js';


@Component({
  selector: 'app-videolib',
  templateUrl: './videolib.component.html',
  styleUrls: ['./videolib.component.css']
})
export class VideolibComponent implements AfterViewInit {
 
  public vjs: videojs.Player;
  @Input() urlVideo: string;
  @Input() urlPoster: string;

  constructor() {}


  ngAfterViewInit() {
    const options = {
      'sources' : [{
        'src' : 'https://ia800209.us.archive.org/24/items/WildlifeSampleVideo/Wildlife.mp4',
        'type' : 'video/mp4'
        }
      ],
      'poster' : this.urlPoster
    };
    this.vjs = videojs('my-player', options);

  }
}

