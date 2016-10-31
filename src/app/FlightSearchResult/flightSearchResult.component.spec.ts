import { DebugElement }    from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { FlightSearchResultComponent } from './flightSearchResult.component';
import { FlightSearchService } from '../shared/FlightSearch/FlightSearch.service';
import { testFlights } from '../Tests/TestFlights';

describe('Flight search result page ', () => {

    let comp: FlightSearchResultComponent;
    let fixture: ComponentFixture<FlightSearchResultComponent>;
    let flightSearchService: FlightSearchService;
    let spy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                FlightSearchResultComponent
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [FlightSearchService]
        });

        fixture = TestBed.createComponent(FlightSearchResultComponent);
        comp = fixture.componentInstance;

        flightSearchService = fixture.debugElement.injector.get(FlightSearchService);
    });

    it('should create the component', async(() => {
        expect(comp).toBeTruthy();
    }));

    it(`should have as title 'Flight search page'`, async(() => {
        expect(comp.title).toEqual('Flight search page');
    }));

    it(`should not have called for list of flights before OnInit`, async(() => {
        spy = spyOn(flightSearchService, 'getFlights')
            .and.returnValue(Promise.resolve(testFlights));

        expect(spy.calls.any()).toBe(false, 'GETFLIGHTS CALLED BEFORE ONINIT');
    }));





    /*
    it(`should have call for list of flights after OnInit`, async(() => {
        spy = spyOn(flightSearchService, 'getFlights')
            .and.returnValue(Promise.resolve(testFlights));

        fixture.detectChanges();

        expect(spy.calls.any()).toBe(true, 'GETFLIGHTS NOT CALLED');
    }));*/

    it(`should have list of flights after OnInit`, async(() => {
        spy = spyOn(flightSearchService, 'getFlights')
            .and.returnValue(Promise.resolve(flightSearchService));

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(comp.flights).toBe(testFlights);
        });
    }));





    /*


    Check url parameters
  





    */

});

