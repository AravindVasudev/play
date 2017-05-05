import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  dropTitle: String  = 'DROP FILE HERE OR CLICK TO UPLOAD';
  @Output() fileRead = new EventEmitter<File>();
  constructor() { }

  onChange(event) {
    this.emitFile(event.target.files[0]);
  }

  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();

    this.dropTitle = 'DROP';
  }

  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();

    this.dropTitle = 'DROP FILE HERE OR CLICK TO UPLOAD';
  }

  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    this.emitFile(event.dataTransfer.files[0]);

    this.dropTitle = 'DROPPED';
  }

  emitFile(file) {
    this.fileRead.emit(file);
  }
}
