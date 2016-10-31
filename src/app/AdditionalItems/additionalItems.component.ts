import { Component } from '@angular/core';

import { Template  } from '../shared/template';

@Component({
    selector: 'ej-home',
    templateUrl: './additionalItems.component.html'
})
export class AdditionalItemsComponent extends Template {
    title = 'Additional items page';
}