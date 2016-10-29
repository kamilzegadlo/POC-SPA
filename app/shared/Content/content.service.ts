import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Widget } from '../widget.d'

@Injectable()
export class ContentService {

    constructor()
    {
        this.content = this.itemId      
        //.distinctUntilChanged()   
        .switchMap(term => this.fetchContent(term))
        .catch(error => {
            console.log(error);
            return Observable.of<Widget>();
        });
    }

    content:Observable<Widget>;
    private itemId = new Subject<string>();


    private subsribtion: any;

    search(term?: string): void {
        this.itemId.next(term);
    }

    ngOnInit(): void {

    }

    fetchContent(params?: any): Observable<Widget> {

        if (params==13) {
            return Observable.of({
                placeholderName: "template",
                componentName: 'HeaderBodyFooterComponent',
                componentSettings: { labelFromJson: 'It is the next label from json/sitecore!' },
                childWidgets: [
                    { placeholderName: 'bodyWidget', componentName: 'FlightSearchResultComponent' },
                    { placeholderName: 'headerWidget', componentName: 'SampleHeaderComponent' },
                    { placeholderName: 'footerWidget', componentName: 'SampleFooterComponent' }
                ]
            });
        } else {
            return Observable.of({
                placeholderName: "template",
                componentName: 'HeaderBodyFooterComponent',
                componentSettings: { labelFromJson: 'It is a label from json/sitecore!' },
                childWidgets: [
                    {
                        placeholderName: 'bodyWidget', componentName: 'HomeComponent',
                        componentSettings: { submitSearchBtn: "13" } //a sample sitecore item id to get the content for the next step in the journey
                    },
                    { placeholderName: 'headerWidget', componentName: 'SampleHeaderComponent' },
                    { placeholderName: 'footerWidget', componentName: 'SampleFooterComponent' }
                ]
            });
        }
        
    }

}

