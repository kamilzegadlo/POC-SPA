import { Component, OnInit } from '@angular/core';

import { Airport } from '../shared/airport.d';
import { ContentService  } from '../shared/Content/content.service';
import { FlightSearchParams } from '../shared/FlightSearch/flightSearchParams.d';
import { StaticDataService } from '../shared/StaticData/StaticData.service';
import { Template  } from '../shared/template';

@Component({
    selector: 'ej-home',
    templateUrl: './home.component.html',
    providers: [StaticDataService],
    styles: ['./home.component.css']
})

export class HomeComponent extends Template implements OnInit {
    title = 'Home page';

    oneWayFlight: boolean;
    departureAirport: string="";
    arrivalAirport: string="";
    departureDate: string;
    returnDate: string;

    airports: Airport[];

    constructor(private contentService: ContentService, private staticDataService: StaticDataService) { super();}

    ngOnInit(): void {
        this.getAirports();
    }

    getAirports(): void {
        this.staticDataService.getListOfAirports().then(airports => this.airports=airports, (exception)=> console.log(exception));
    }

    submitSearch(): void {
        this.contentService.search(this.settings.submitSearchBtn);
    }

}