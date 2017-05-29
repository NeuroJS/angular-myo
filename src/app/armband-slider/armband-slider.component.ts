import { Component } from '@angular/core';
import { ArmbandService } from '../services/armband';

@Component({
  selector: 'armband-slider',
  templateUrl: './armband-slider.component.html',
  styleUrls: ['./armband-slider.component.css']
})
export class ArmbandSliderComponent {
  keys = Object.keys;
  imu = this.armbandService.fromEvent('imu');
  constructor(private armbandService: ArmbandService) {}
}

