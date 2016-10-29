/* tslint:disable:no-unused-variable */

import { DebugElement }    from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonClickEvents, click } from './Tests/clickHelper';

describe('App: EasyJet2017FrontEnd', () => {

    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let spy: jasmine.Spy;

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [
            AppComponent
          ]
      });

      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'master page'`, async(() => {
    expect(comp.title).toEqual('master page');
  }));
    /*
  it(`should call redirection after click homeLink`, () => {

      const router = fixture.debugElement.injector.get(Router);

      spy = spyOn(router, 'navigate');

      let submitSearchBtn: DebugElement = fixture.debugElement.query(By.css('#homeLink'));

      click(submitSearchBtn);
      //tick();


      //expect(router.navigate.calls.any()).toBe(true, 'ROUTER.NAVIGATE NOT CALLED');
      expect(spy.calls.any()).toBe(true, 'ROUTER.NAVIGATE NOT CALLED');
  });
    */
});
