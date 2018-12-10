import { Component, OnInit, OnDestroy, ElementRef, Input, AfterViewInit } from '@angular/core';
declare var videojs: any;

@Component({
  selector: 'app-videolib',
  templateUrl: './videolib.component.html',
  styleUrls: ['./videolib.component.css']
})
export class VideolibComponent implements OnInit, AfterViewInit, OnDestroy {
 
  // declare player var
  private videoJSplayer: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initVideoJs();
  }

  initVideoJs() {
    this.videoJSplayer = videojs('video_player');
    // const transcript = this.videoJSplayer.transcript();
    // const transcriptCon = document.querySelector('#transcriptContainer');
    // transcriptCon.appendChild(transcript.el());
  }

  ngOnDestroy() {
    this.videoJSplayer.dispose();
  }
}
