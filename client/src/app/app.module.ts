import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { TopComponent }   from './components/top/top.component';
import { MenuComponent }   from './components/menu/menu.component';
import { FeaturesComponent }   from './components/features/features.component';
import { BenefitsComponent }   from './components/benefits/benefits.component';
import { ProxyComponent }   from './components/proxy/proxy.component';
import { NotFoundComponent }   from './not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: TopComponent},
    { path: 'top', component: TopComponent},
    { path: 'benefits', component: BenefitsComponent},
    { path: 'features', component: FeaturesComponent},
    { path: 'proxy', component: ProxyComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, LazyLoadImageModule],
    declarations: [ AppComponent, TopComponent, MenuComponent, NotFoundComponent, BenefitsComponent, FeaturesComponent, ProxyComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
