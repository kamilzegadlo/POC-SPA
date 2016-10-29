import { Component, ComponentFactoryResolver, ComponentRef, OnChanges, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { HomeComponent } from '../Home/home.component';
import { FlightSearchResultComponent } from '../FlightSearchResult/flightSearchResult.component';
import { SampleHeaderComponent } from '../SampleHeader/sampleHeader.component';
import { SampleFooterComponent } from '../SampleFooter/sampleFooter.component';
import { ComponentMapperService  } from '../shared/Content/componentMapper.service';
import { Template  } from '../shared/template';
import { Widget  } from '../shared/widget.d';

@Component({
    selector: 'header-body-footer-template',
    templateUrl: './app/HeaderBodyFooter/headerBodyFooter.component.html',
    styleUrls: ['./app/HeaderBodyFooter/headerBodyFooter.component.css']
})
export class HeaderBodyFooterComponent extends Template implements OnChanges, OnInit, OnDestroy {

    private headerWidgetReference: ComponentRef<any>;
    private bodyWidgetReference: ComponentRef<any>;
    private footerWidgetReference: ComponentRef<any>;

    @ViewChild('headerWidget', { read: ViewContainerRef })
    private headerWidget : any;
    @ViewChild('bodyWidget', { read: ViewContainerRef })
    private bodyWidget : any;
    @ViewChild('footerWidget', { read: ViewContainerRef })
    private footerWidget: any;

    private isViewInitialized: boolean = false;

    title = 'Header Body Footer template';

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { super();}

    private componentMapperService: ComponentMapperService; 

    ngOnInit(): void {
        this.componentMapperService=new ComponentMapperService();
        this.isViewInitialized = true;
        this.updateComponent();
    }

    ngOnDestroy(): void {
        this.destroyReferences();
    }

    ngOnChanges() {
        this.updateComponent();
    }

    private destroyReferences() {

        if (this.headerWidgetReference) {
            this.headerWidgetReference.destroy();
        }
        if (this.bodyWidgetReference) {
            this.bodyWidgetReference.destroy();
        }
        if (this.footerWidgetReference) {
            this.footerWidgetReference.destroy();
        }
    }

    private updateComponent() {

        if (!this.isViewInitialized) {
            return;
        }

        this.destroyReferences();

        for (var childWidget of this.childWidgets) {

            if (childWidget.placeholderName == "headerWidget") {
                let component: any = this.componentMapperService.getComponentFromStringName(childWidget.componentName);

                let componentFooterWidget = this.componentFactoryResolver.resolveComponentFactory(component);
                this.headerWidgetReference = this.headerWidget.createComponent(componentFooterWidget);

                this.headerWidgetReference.instance.settings = childWidget.componentSettings;
                this.headerWidgetReference.instance.childWidgets = childWidget.childWidgets;
            }
            else if (childWidget.placeholderName == "bodyWidget") {
                let component: any = this.componentMapperService.getComponentFromStringName(childWidget.componentName);

                let componentFooterWidget = this.componentFactoryResolver.resolveComponentFactory(component);
                this.bodyWidgetReference = this.bodyWidget.createComponent(componentFooterWidget);

                this.bodyWidgetReference.instance.settings = childWidget.componentSettings;
                this.bodyWidgetReference.instance.childWidgets = childWidget.childWidgets;
            }
            else if (childWidget.placeholderName == "footerWidget") {
                let component: any = this.componentMapperService.getComponentFromStringName(childWidget.componentName);

                let componentFooterWidget = this.componentFactoryResolver.resolveComponentFactory(component);
                this.footerWidgetReference = this.footerWidget.createComponent(componentFooterWidget);

                this.footerWidgetReference.instance.settings = childWidget.componentSettings;
                this.footerWidgetReference.instance.childWidgets = childWidget.childWidgets;
            }
        }
    }

}