import {Component, OnInit} from '@angular/core';
import { DataService } from '../../data.service';


@Component({
    selector: 'ng-top',
    template: `
        <div class="section main-screen aos-init aos-animate" data-aos="fade-in">
            <div class="container main-screen__inner">
                <div class="main-screen__text aos-init aos-animate" data-aos="fade-up">
                    <h2 class="title">{{content.title}}</h2>
                    <div class="subtitle">{{content.sbtitle}}</div>
                </div>
                <div class="main-screen__form">
                    <img src="buble.svg" class="buble-big"/>
                    <img src="buble-little.svg" class="buble-little"/>
                </div>
            </div>
        </div>`
})

export class TopComponent implements OnInit {
    content: any[]  = [];
    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.sendGetRequest('/pages/1').subscribe((data: any[])=>{
            this.content = data;
        })
    }
}
