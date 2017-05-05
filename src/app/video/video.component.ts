import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnChanges {
  @Input() videoFile: File;
  player: any;

  constructor(private titleService: Title) {}

  ngOnInit() {
    // Select the video element
    this.player = document.querySelector('#player');
  }

  ngOnChanges() {
    // When videoFile is set via AppComponent
    if(this.videoFile !== undefined) {
      this.play(this.videoFile);
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

    this.play(event.dataTransfer.files[0]);
  }

  // Plays the Video from File
  play(file) {
    // Set the browser title
    this.titleService.setTitle(file.name);

    // Create BLOB URL and load the player
    let src = URL.createObjectURL(file);
    this.player.src = src;
    this.player.play();
  }
}
