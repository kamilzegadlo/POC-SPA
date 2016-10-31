/* tslint:disable:no-unused-variable */

import { DebugElement }    from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { HeaderBodyFooterComponent } from './headerBodyFooter.component';

describe('Header Body Footer template', () => {

    let comp: HeaderBodyFooterComponent;
    let fixture: ComponentFixture<HeaderBodyFooterComponent>;
    let spy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderBodyFooterComponent
            ],
            imports: [
                RouterTestingModule
            ]
        });

        fixture = TestBed.createComponent(HeaderBodyFooterComponent);
        comp = fixture.componentInstance;
    });

    it('should create the app', async(() => {
        expect(comp).toBeTruthy();
    }));

    it(`should have as title 'master page'`, async(() => {
        expect(comp.title).toEqual('Header Body Footer template');
    }));
    
});
