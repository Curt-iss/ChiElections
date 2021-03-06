import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.sass'],
})
export class CitiesComponent implements OnInit {
  cities: String[] = ['Chicago', 'New York'];

  selected: String = 'Chicago';

  constructor() {}

  ngOnInit() {}
}
