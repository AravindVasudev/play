import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnChanges {
  @Input() videoFile: File;
  player: any;

  ngOnInit() {
    this.player = document.querySelector('#player');
  }

  ngOnChanges() {
    if(this.videoFile !== undefined) {
      console.log(this.videoFile);

      let src = URL.createObjectURL( this.videoFile );
      this.player.src = src;
      this.player.play();
    }
  }
}
