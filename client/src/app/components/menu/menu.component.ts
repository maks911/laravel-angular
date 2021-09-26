import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ng-menu',
    template: `<header class="header">
        <div class="container usual-wrapper">
            <div class="header__inner nav-line">
                <a class="logo" routerLink="/top">
                    <img src="/B2Broker_logo.svg" class="header__logo"/>
                </a>
                <ul class="nav">
                    <li class="nav__item js-anchor menu-item menu-item-type-custom menu-item-object-custom">
                        <a class=nav__item__link routerLink="/benefits">
                            Benefits
                        </a>
                    </li>
                    <li class="nav__item js-anchor menu-item menu-item-type-custom menu-item-object-custom">
                        <a class=nav__item__link routerLink="/features">
                            Features
                        </a>
                    </li>
                    <li class="nav__item js-anchor menu-item benefitsmenu-item-type-custom menu-item-object-custom">
                        <a class=nav__item__link routerLink="/proxy">
                            Proxy
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
    constructor() { }

    ngOnInit() {}
}
