import { Component, OnInit } from '@angular/core';

import lan from '../../assets/lan.json';

@Component({
  selector: 'app-lan-liste',
  templateUrl: './lan-liste.component.html',
  styleUrls: ['./lan-liste.component.scss'],
})
export class LanListeComponent implements OnInit {
  lan = lan.lan;

  constructor() {
    console.log(lan.lan);
  }

  ngOnInit() {}
}
