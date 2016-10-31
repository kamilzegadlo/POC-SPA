import { DebugElement }    from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { Airport } from '../shared/airport.d';
import { HomeComponent } from './home.component';
import { StaticDataService } from '../shared/StaticData/StaticData.service';
import { testStaticData } from '../Tests/TestStaticData';
import { ButtonClickEvents, click } from '../Tests/clickHelper';

describe('Home page', () => {

    let comp: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let staticDataService: StaticDataService;
    let spy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
            imports: [
                RouterTestingModule
            ]
        });

        fixture = TestBed.createComponent(HomeComponent);
        comp = fixture.componentInstance;

        staticDataService = fixture.debugElement.injector.get(StaticDataService);
    });

/*
    it('should create the component', async(() => {
        expect(comp).toBeTruthy();
    }));

    it(`should have as title 'home page'`, async(() => {
        expect(comp.title).toEqual('Home page');
    }));

    it(`should not have called for list of airports before OnInit`, async(() => {
        spy = spyOn(staticDataService, 'getListOfAirports')
            .and.returnValue(Promise.resolve(testStaticData));

        expect(spy.calls.any()).toBe(false, 'getListOfAirports not yet called');
    }));

    it(`should have call for list of airports after OnInit`, async(() => {
        spy = spyOn(staticDataService, 'getListOfAirports')
            .and.returnValue(Promise.resolve(testStaticData));

        fixture.detectChanges();

        expect(spy.calls.any()).toBe(true, 'getListOfAirports called');
    }));

    it(`should have list of airports after OnInit`, async(() => {
        spy = spyOn(staticDataService, 'getListOfAirports')
            .and.returnValue(Promise.resolve(testStaticData));

        fixture.detectChanges();

        fixture.whenStable().then(() => { 
            fixture.detectChanges();        
            expect(comp.airports).toBe(testStaticData);
        });
    }));
*/



    /*
    it(`should call redirection after click submit`, () => {
        const router = fixture.debugElement.injector.get(Router);

        spy = spyOn(router, 'navigate');

        let submitSearchBtn: DebugElement = fixture.debugElement.query(By.css('#search-submit'));

        click(submitSearchBtn);

        expect(spy.calls.any()).toBe(true, 'ROUTER.NAVIGATE NOT CALLED');
    });
    
    it(`should redirect to flightSearchResult page after click submit`, () => {
        const router = fixture.debugElement.injector.get(Router);

        spy = spyOn(router, 'navigate');

        let submitSearchBtn: DebugElement = fixture.debugElement.query(By.css('#search-submit')); 

        click(submitSearchBtn);

        const navArgs = spy.calls.first().args[0];

        expect(navArgs[0]).toBe('/flightSearchResult',
            'NO REDIRECTION TO FLIGHT SEARCH RESULT PAGE');
    });

    it(`should redirect to flightSearchResult page after click submit with proper params`, () => {
        const router = fixture.debugElement.injector.get(Router);

        spy = spyOn(router, 'navigate');

        let submitSearchBtn: DebugElement = fixture.debugElement.query(By.css('#search-submit'));

        comp.departureAirport = "LGW";
        comp.arrivalAirport = "BCN";
        comp.departureDate = "20161010";
        comp.returnDate = "20161010";

        click(submitSearchBtn);

        const navArgs = spy.calls.first().args[0];

        expect(navArgs[1].depIata).toBe(comp.departureAirport);
        expect(navArgs[1].arrIata).toBe(comp.arrivalAirport);
        expect(navArgs[1].depDate).toBe(comp.departureDate);
        expect(navArgs[1].retDate).toBe(comp.returnDate);
    });*/

});

