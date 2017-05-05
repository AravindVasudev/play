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
    // Select the video element
    this.player = document.querySelector('#player');
  }

  ngOnChanges() {
    // When videoFile is set via AppComponent
    if(this.videoFile !== undefined) {
      // Create BLOB URL and load the player
      let src = URL.createObjectURL(this.videoFile);
      this.player.src = src;
      this.player.play();
    }
  }

  // When a File is dragged over
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // When a File is dropped
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    let src = URL.createObjectURL(event.dataTransfer.files[0]);
    this.player.src = src;
    this.player.play();
  }
}
