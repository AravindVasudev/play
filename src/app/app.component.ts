import { Component, ViewChild, HostListener } from '@angular/core';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(VideoComponent) videoComponent: VideoComponent;
  fileComponentView: Boolean = false;
  videoComponentView: Boolean = true;

  onFile(file) {
    // Play Video
    this.videoComponent.play(file);

    // Switch Component
    this.fileComponentView = true;
    this.videoComponentView = false;
  }

  // When a File is dragged over prevent default action
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // When a File is dropped prevent default action
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // When Enter is pressed toggle video play State
  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev) {
    if(ev.keyCode === 32) {
      this.videoComponent.toggleVideoState();
    }
  }
}
