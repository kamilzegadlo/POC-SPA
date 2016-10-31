import { Injectable } from '@angular/core';

import { Airport } from '../airport.d';
import { testStaticData } from '../../Tests/TestStaticData';

@Injectable()
export class StaticDataService {

    getListOfAirports(): Promise<Airport[]> {
        return Promise.resolve(testStaticData);
    }

}