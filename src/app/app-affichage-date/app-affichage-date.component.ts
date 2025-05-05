import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-affichage-date',
  imports: [DatePipe],
  templateUrl: './app-affichage-date.component.html',
  styleUrl: './app-affichage-date.component.css'
})
export class AppAffichageDateComponent {
  today: Date = new Date();
}
