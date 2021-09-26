import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ng-top',
    template: `
        <div class="section main-screen aos-init aos-animate" data-aos="fade-in">
            <div class="container main-screen__inner">
                <div class="main-screen__text aos-init aos-animate" data-aos="fade-up">
                    <h2 class="title">Top Title</h2>
                    <div class="subtitle">Top Subtitle</div>
                </div>
                <div class="main-screen__form">
                    <img src="buble.svg" class="buble-big"/>
                    <img src="buble-little.svg" class="buble-little"/>
                </div>
            </div>
        </div>`
})

export class TopComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
