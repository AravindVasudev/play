import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fileComponentView: Boolean = false;
  videoComponentView: Boolean = true;
  videoFile: File;

  onFile(file) {
    // Pass Video Object to Video Component
    this.videoFile = file;

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
}
