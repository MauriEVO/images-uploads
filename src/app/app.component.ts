import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageUploadComponent } from "./components/image-upload/image-upload.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageUploadComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'upload-menorca-photos';
}
