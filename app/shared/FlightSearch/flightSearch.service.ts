import { Injectable } from '@angular/core';

import { Flight } from '../flight.d';
import { FlightSearchParams } from './flightSearchParams.d';
import { testFlights } from '../../Tests/TestFlights';

@Injectable()
export class FlightSearchService {

    getFlights(flightSearchParams: FlightSearchParams): Promise<Flight[]> {
        return Promise.resolve(testFlights);
    }

}