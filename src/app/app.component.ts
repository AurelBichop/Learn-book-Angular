import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  template: '<app-navbar />',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-book';
}
