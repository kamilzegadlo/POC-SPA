import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { FlightSearchResultComponent } from './FlightSearchResult/flightSearchResult.component';
import { AdditionalItemsComponent } from './AdditionalItems/additionalItems.component';
import { HeaderBodyFooterComponent } from './HeaderBodyFooter/headerBodyFooter.component';
import { SampleHeaderComponent } from './SampleHeader/sampleHeader.component';
import { SampleFooterComponent } from './SampleFooter/sampleFooter.component';
import { ContentService  } from './shared/Content/content.service';
import { ComponentMapperService  } from './shared/Content/componentMapper.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FlightSearchResultComponent,
        AdditionalItemsComponent,
        HeaderBodyFooterComponent,
        SampleHeaderComponent,
        SampleFooterComponent
    ],
    entryComponents: [FlightSearchResultComponent, HeaderBodyFooterComponent, HomeComponent, SampleHeaderComponent, SampleFooterComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ContentService, ComponentMapperService],
    bootstrap: [AppComponent]
})
export class AppModule { }
