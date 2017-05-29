import { Component } from '@angular/core';
import { ArmbandService } from '../services/armband';
import _ from 'lodash';

@Component({
  selector: 'armband-slider',
  templateUrl: './armband-slider.component.html',
  styleUrls: ['./armband-slider.component.css']
})
export class ArmbandSliderComponent {
  keys = Object.keys;
  constructor(private armbandService: ArmbandService) {}
  imu$ = this.armbandService.fromEvent('imu')
    .map(data => _.map(data, (value, key) => ({ key, value }) ));
}
