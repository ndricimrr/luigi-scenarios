import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample app';
  open = true;

  openCloseModal() {
    this.open = !this.open; 
  }
}
