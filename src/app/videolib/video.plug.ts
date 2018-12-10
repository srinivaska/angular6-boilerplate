component({
    selector: 'app-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.css']
  })
  export class VideoPlayerComponent implements AfterViewInit, OnChanges, OnDestroy {
  
@Input() selectedClip: any;
@Output() nextClip = new EventEmitter<string>();

videoPlayer;
clipLoaded = false;
isPlaying = false;
muted = false;
currentTime;
selectedClipSource: string;
clipDuration: string;
captionsUrl: string;

constructor() { }

ngAfterViewInit() {
  const options = {
    hls: {
      withCredentials: true
    }
  };
  this.videoPlayer = videojs('my-player', {
    flash: options, html5: options,
    plugins: {
      timeOffset: {}
    }
  }, (onPlayerReady) => {
    videojs.log('VideoJs: The video player successfully initialized.');
    this.videoPlayer.on('timeupdate', () => {
      this.updateSeek();
      this.updateCurrentTime();
    });
  });
}

ngOnChanges() {
  if (typeof this.selectedClip !== 'undefined') {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime(0);
    this.loadVideoSource();
  } else {
    if (this.videoPlayer) {
      this.resetVideo();
      this.clipLoaded = false;
    }
  }
}

loadVideoSource(): void {
    this.setClipTimeOffset(this.selectedClip.streamingUrl);
    this.clipLoaded = true;
    this.videoPlayer.src({ type: 'application/vnd.apple.mpegurl', src: this.selectedClip.streamingUrl });
    this.isPlaying = true;
    this.videoPlayer.play();
    this.clipDuration = this.selectedClip.duration;
}

toggleClosedCaptions() {
  if (this.captionsUrl) {
    this.captionsUrl = undefined;
  } else {
    this.captionsUrl = this.selectedClip['captions'];
  }
}

playVideo() {
  this.videoPlayer.play();
}

pauseVideo() {
  this.videoPlayer.pause();
}

toggleMute() {
  this.muted = !this.muted;
}

enterFullscreen() {
  this.videoPlayer.requestFullscreen();
}

seek($event) {
  if (this.clipLoaded) {
    let goto;
    goto = this.videoPlayer.duration() * ($event.target.value / 100);
    this.videoPlayer.currentTime(goto);
  }
}

getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

setClipTimeOffset(streamingUrl: string): void {
  const clipIn = Math.round(parseFloat(this.getParameterByName('clipin', streamingUrl)));
  const clipOut = Math.round(parseFloat(this.getParameterByName('clipout', streamingUrl)));
  this.videoPlayer.timeOffset({
    start: clipIn,
    end: clipOut,
    restart_beginning: false
  });
}

ngOnDestroy() {
  if (this.videoPlayer) {
    this.videoPlayer.dispose();
  }
}