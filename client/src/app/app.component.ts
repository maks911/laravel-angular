import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <ng-menu></ng-menu>
            <router-outlet></router-outlet>
        </div>`
})


export class AppComponent { }
