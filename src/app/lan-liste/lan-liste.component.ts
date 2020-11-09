import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lan-liste',
  templateUrl: './lan-liste.component.html',
  styleUrls: ['./lan-liste.component.scss'],
})
export class LanListeComponent implements OnInit {
  lanData = JSON.parse(localStorage.getItem('data'));

  constructor() {}

  ngOnInit() {}
}
