import { Component, OnInit } from '@angular/core';

import lan from '../../assets/lan.json';

@Component({
  selector: 'app-lan-detaljer',
  templateUrl: './lan-detaljer.component.html',
  styleUrls: ['./lan-detaljer.component.scss'],
})
export class LanDetaljerComponent implements OnInit {
  lan = lan.lan;

  constructor() {
    console.log(lan.lan);
  }

  ngOnInit() {}
}
