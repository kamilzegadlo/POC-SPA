import { Injectable } from '@angular/core';

import { HomeComponent } from '../../Home/home.component';
import { FlightSearchResultComponent } from '../../FlightSearchResult/flightSearchResult.component';
import { AdditionalItemsComponent } from '../../AdditionalItems/additionalItems.component';
import { HeaderBodyFooterComponent } from '../../HeaderBodyFooter/headerBodyFooter.component';
import { SampleHeaderComponent } from '../../SampleHeader/sampleHeader.component';
import { SampleFooterComponent } from '../../SampleFooter/sampleFooter.component';


@Injectable()
export class ComponentMapperService {

    getComponentFromStringName(componentName: string): any {

        switch (componentName) {
            case 'HomeComponent':
                return HomeComponent;
            case 'FlightSearchResultComponent':
                return FlightSearchResultComponent;
            case 'AdditionalItemsComponent':
                return AdditionalItemsComponent;
            case 'HeaderBodyFooterComponent':
                return HeaderBodyFooterComponent;
            case 'SampleHeaderComponent':
                return SampleHeaderComponent;
            case 'SampleFooterComponent':
                return SampleFooterComponent;
            default:
                return HomeComponent;
        }


    }

}