import { Component, OnInit } from '@angular/core';
import { DigispaceServiceService } from './../../digispace-service.service';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css'],
  // providers: [AirService],
})
export class AirComponent implements OnInit {
  constructor(private DigispaceServiceService: DigispaceServiceService) {}
  airData;

  ngOnInit() {
    /*    this.airService.getInfo().subscribe((values) => {
      console.log(values);
    }); */
    this.airData = this.DigispaceServiceService.getData();
    console.log('ffff', this.airData);
  }
}
