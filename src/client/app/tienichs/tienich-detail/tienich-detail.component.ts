import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TienIch } from '../shared/tienich.model';
import { TienIchService } from '../shared/tienich.service';

@Component({
    templateUrl: '/tienichs/tienich-detail/tienich-detail.component.html'
})
export class TienIchDetailComponent implements OnInit {
    pageTitle: string = 'Tien ICH Detail';
    @Input() tienich: TienIch;
    errorMessage: string;

    constructor(private _tienichService: TienIchService,
        private _router: Router,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            console.log(params["id"])
            let id = +params["id"];
            this.getTienIch(id);
        })
    }

    getTienIch(id: number) {
             this._tienichService.getTienIch(id)
            .then(tienich => {
            console.log(tienich);
            this.tienich = tienich;
            })
    }

    onBack(): void {
        this._router.navigate(['tienichs']);
    }

}
