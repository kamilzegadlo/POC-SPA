import { Component } from '@angular/core';

import { Template  } from '../shared/template';

@Component({
    selector: 'ej-home',
    templateUrl: './app/AdditionalItems/additionalItems.component.html'
})
export class AdditionalItemsComponent extends Template {
    title = 'Additional items page';
}