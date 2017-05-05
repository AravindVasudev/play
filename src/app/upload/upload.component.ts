import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  dropTitle: String  = 'DROP FILE HERE OR CLICK TO UPLOAD';
  @Output() fileRead = new EventEmitter<File>();

  // When File is Selected
  onChange(event) {
    this.emitFile(event.target.files[0]);
  }

  // When a File is dragged over
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();

    this.dropTitle = 'DROP';
  }

  // When a File is dragged out
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();

    this.dropTitle = 'DROP FILE HERE OR CLICK TO UPLOAD';
  }

  // When a File is dropped
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    this.dropTitle = 'DROPPED';
    this.emitFile(event.dataTransfer.files[0]);
  }

  // Emits the File Object
  emitFile(file) {
    this.fileRead.emit(file);
  }
}
