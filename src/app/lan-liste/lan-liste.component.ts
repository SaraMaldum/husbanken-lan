import { Component } from '@angular/core';

import lan from '../../assets/lan.json';

@Component({
  selector: 'app-lan-liste',
  templateUrl: './lan-liste.component.html',
  styleUrls: ['./lan-liste.component.scss'],
})
export class LanListeComponent {
  constructor() {
    console.log(lan);
  }
}
