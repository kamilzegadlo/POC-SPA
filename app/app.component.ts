import { Component, ComponentFactoryResolver, ComponentRef, OnChanges, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { ComponentMapperService  } from './shared/Content/componentMapper.service';
import { ContentService  } from './shared/Content/content.service';
import { Widget } from './shared/widget.d'
import { HeaderBodyFooterComponent  } from './HeaderBodyFooter/headerBodyFooter.component';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [ComponentMapperService]
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {

    private templateReference: ComponentRef<any>;

    private content: Widget;

    @ViewChild('template', { read: ViewContainerRef })
    private template: any;

    title = 'master page';

    private isViewInitialized: boolean = false;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private contentService: ContentService,
        private componentMapperService: ComponentMapperService) { }

    ngOnInit(): void {

        this.isViewInitialized = true;

        this.getDefaultContent();
    }

    ngOnDestroy(): void {
        this.destroyReferences();
    }

    ngOnChanges() {
        this.updateComponent();
    }

    private destroyReferences() {
        if (this.templateReference) {
            this.templateReference.destroy();
        }
    }

    private updateComponent() {
        if (!this.isViewInitialized) {
            return;
        }

        this.destroyReferences();

        let component: any = this.componentMapperService.getComponentFromStringName(this.content.componentName);

        let componentFooterWidget = this.componentFactoryResolver.resolveComponentFactory(component);
        this.templateReference = this.template.createComponent(componentFooterWidget);

        this.templateReference.instance.settings = this.content.componentSettings;
        this.templateReference.instance.childWidgets = this.content.childWidgets;
    }

    getDefaultContent(): void {

        this.contentService.content.subscribe(
          value => {this.content=value; this.updateComponent()},
          error => console.log(error));

        this.contentService.search();
    }
}
