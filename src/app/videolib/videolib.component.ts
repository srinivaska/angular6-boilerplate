import { Component, AfterViewInit, Input } from '@angular/core';
import videojs from 'video.js';
import videojsplay from 'videojs-playlist';
import chromecast from 'videojs-chromecast';



@Component({
  selector: 'app-videolib',
  templateUrl: './videolib.component.html',
  styleUrls: ['./videolib.component.css']
})
export class VideolibComponent implements AfterViewInit {
 
  public vjs: videojs.Player;
  public playlist: any;
  public currentIndex = "0";

  constructor() {
    
    this.playlist = [{
      sources: [{
        src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
        type: 'video/mp4'
      }],
      poster: 'http://media.w3.org/2010/05/sintel/poster.png',
      title: 'sample Title'
    }, {
      sources: [{
        src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
        type: 'video/mp4'
      }],
      poster: 'http://media.w3.org/2010/05/bunny/poster.png',
      title: 'sample Title'
    }, {
      sources: [{
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4'
      }],
      poster: 'http://media.w3.org/2010/05/video/poster.png',
      title: 'sample Title'
    }, {
      sources: [{
        src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
        type: 'video/mp4'
      }],
      poster: 'http://media.w3.org/2010/05/bunny/poster.png',
      title: 'sample Title'
    }, {
      sources: [{
        src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
        type: 'video/mp4'
      }],
      poster: 'http://media.w3.org/2010/05/video/poster.png',
      title: 'sample Title'
    }];
  }


  ngAfterViewInit() {
    videojsplay;
    this.initVideoJs();
  }


  initVideoJs() {
    console.log(chromecast);
    this.vjs = videojs('my-player', {chromecast:{appId:undefined}});
    this.vjs.playlist(this.playlist);
    this.vjs.playlist.autoadvance(0);
    console.log(this.vjs);
  }


  onClick(index) {
    console.log(index);
    this.vjs.playlist.currentItem(index);
    this.currentIndex = index;
  }
}

