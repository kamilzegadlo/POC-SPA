import { Component, OnInit } from '@angular/core';

import { Flight } from '../shared/flight.d';
import { FlightSearchParams } from '../shared/FlightSearch/flightSearchParams';
import { FlightSearchService } from '../shared/FlightSearch/flightSearch.service';
import { Template  } from '../shared/template';

@Component({
    selector: 'ej-flightsearchresult',
    templateUrl: './app/FlightSearchResult/flightSearchResult.component.html',
    providers: [FlightSearchService],
    styles: ['./app/FlightSearchResult/flightSearchResult.component.css']
})
export class FlightSearchResultComponent extends Template implements OnInit {
    title = 'Flight search page';

    flights: Flight[];

    constructor(private flightSearchService: FlightSearchService) { super();}

    ngOnInit(): void {
        this.getFlights();
    }

    getFlights(): void {
        this.flightSearchService.getFlights(null).then(flights => this.flights = flights, (exception) => console.log(exception));
    }
}