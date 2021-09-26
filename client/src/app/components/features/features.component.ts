import {Component, OnInit} from '@angular/core';
import { DataService } from '../../data.service';

@Component({
    selector: 'ng-features',
    template: `
        <div class="section benefits pink">
            <div class="container">
                <h2 class="title aos-init aos-animate" data-aos="fade-right">
                    Test Title
                </h2>
                <div class="list aos-init aos-animate" data-aos="fade-up">
                    <div ng-repeat="(key, item) in content.features"  class="list_el">
                        <div class="list_el_inner">
                            <div class="list_el_title">
                                {{item.title}}
                            </div>
                            <div class="list_el_description">
                                {{item.description}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    //templateUrl: "./components/menu/menu.component.html",
    // styleUrls: ['./menu.component.scss']
})

export class FeaturesComponent implements OnInit {
    content: any[]  = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.sendGetRequest('/pages/2').subscribe((data: any[])=>{
            this.content = data;
        })
    }
}
