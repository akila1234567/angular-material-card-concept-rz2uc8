import { Component, OnInit } from '@angular/core';
//import { AirService } from './air.service';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css'],
  // providers: [AirService],
})
export class AirComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /*    this.airService.getInfo().subscribe((values) => {
      console.log(values);
    }); */
  }
}
