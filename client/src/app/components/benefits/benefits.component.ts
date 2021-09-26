import {Component, OnInit} from '@angular/core';
import { DataService } from '../../data.service';

@Component({
    selector: 'ng-benefits',
    template: `
        <div class="section benefits white">
            <div class="container">
                <h2 class="title aos-init aos-animate" data-aos="fade-right">
                    {{content.title}}
                </h2>
                <div class="list aos-init aos-animate" data-aos="fade-up">
                    <div ng-repeat="(key, item) in content.benefits" class="list_el">
                        <img ng-if="item.icon" class="list_el_icon"
                             src="{{item.icon}}"/>
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

export class BenefitsComponent implements OnInit {
    content: any[]  = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.sendGetRequest('/pages/3').subscribe((data: any[])=>{
            this.content = data;
        })
    }
}
