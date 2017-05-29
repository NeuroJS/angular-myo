
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import Myo from 'myo';

@Injectable()
export class ArmbandService {

    armband = Myo;

    constructor () {
        this.armband.on('connected', function () {
            this.vibrate();
            this.streamEMG();
        });
        this.armband.onError = error => console.log(error);
        this.armband.connect('org.neurojs.myo');
    }

    fromEvent(event) {
        return Observable.fromEvent(this.armband, event);
    }
}
