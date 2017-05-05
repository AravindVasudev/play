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
    this.videoFile = file;
    console.log(file);
    this.fileComponentView = true;
    this.videoComponentView = false;
  }
}
