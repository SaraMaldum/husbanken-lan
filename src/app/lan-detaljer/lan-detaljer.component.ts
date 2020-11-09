import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import lan from '../../assets/lan.json';

@Component({
  selector: 'app-lan-detaljer',
  templateUrl: './lan-detaljer.component.html',
  styleUrls: ['./lan-detaljer.component.scss'],
})
export class LanDetaljerComponent implements OnInit {
  lanArray = JSON.parse(localStorage.getItem('data'));
  item;

  constructor(private route: ActivatedRoute) {
    console.log(lan.lan);

    this.route.paramMap.subscribe((params) => {
      this.item = this.lanArray.find((item) => item.id === +params.get('id'));
    });
  }

  ngOnInit() {}
}
