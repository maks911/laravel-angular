import {Component, OnInit} from '@angular/core';
import { DataService } from '../../data.service';

@Component({
    selector: 'ng-menu',
    template: `<header class="header">
        <div class="container usual-wrapper">
            <div class="header__inner nav-line">
                <a class="logo" routerLink="/top">
                    <img src="/B2Broker_logo.svg" class="header__logo"/>
                </a>
                <ul class="nav">
                    <li  ng-repeat="(key, item) in content.items" class="nav__item js-anchor menu-item menu-item-type-custom menu-item-object-custom">
                        <a class=nav__item__link routerLink="{{item.link}}">
                            {{item.name}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    `
    //templateUrl: "./components/menu/menu.component.html",
   // styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
    content: any[]  = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.sendGetRequest('/pages/5').subscribe((data: any[])=>{
            this.content = data;
        })
    }
}
