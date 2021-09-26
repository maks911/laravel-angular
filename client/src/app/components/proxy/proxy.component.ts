import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ng-proxy',
    template: `
        <div class="section sidebanner-button Proxy" style="background-color:#181927">
            <div class="container">
                <div class="inner">
                    <div class="col aos-init aos-animate" data-aos="fade-right">
                        <h2 class="title">
                            Proxy-Servers all around the world
                        </h2>
                        <div class="description">
                            Stable connectivity with minimal latency from every point of the world.
                        </div>
                        <a class="button" href="#">
                            Explore
                            <span class="button-icon">
                                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M6.42676 5.6641L2.21607 0.960651C1.87888 0.583998 1.28917 0.583998 0.951978 0.960651C0.663849 1.2825 0.663585 1.76946 0.951365 2.09162L4.1426 5.6641L0.951366 9.23658C0.663586 9.55875 0.663849 10.0457 0.951978 10.3676C1.28917 10.7442 1.87888 10.7442 2.21607 10.3676L6.42676 5.6641Z"
                                              fill="black" fill-opacity="0.7">
                                        </path>
                                    </svg>
                                </span>
                        </a>
                    </div>
                    <div class="col banner_right aos-init aos-animate" data-aos="fade-left">
                        <img class="banner" src="https://mtwhitelabels.com/app/uploads/2021/07/planet.png" />
                    </div>
                </div>
            </div>
        </div>`
    //templateUrl: "./components/menu/menu.component.html",
    // styleUrls: ['./menu.component.scss']
})

export class ProxyComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
