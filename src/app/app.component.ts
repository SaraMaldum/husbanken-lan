import { Component } from '@angular/core';
import lan from '../assets/lan.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Husbankens lån';
  lan = lan.lan;

  constructor() {
    localStorage.setItem('data', JSON.stringify(lan.lan));
  }
}
