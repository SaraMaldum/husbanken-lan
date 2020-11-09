import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lan-detaljer',
  templateUrl: './lan-detaljer.component.html',
  styleUrls: ['./lan-detaljer.component.scss'],
})
export class LanDetaljerComponent implements OnInit {
  lanArray = JSON.parse(localStorage.getItem('data'));
  item;

  loanDetailsForm = this.fb.group({
    id: new FormControl(''),
    lanetakere: new FormControl(''),
    lanebelop: new FormControl(''),
    notat: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.item = this.lanArray.find((item) => item.id === +params.get('id'));
    });
  }

  onSubmit() {
    console.log(this.loanDetailsForm.value);
  }

  ngOnInit() {}
}
