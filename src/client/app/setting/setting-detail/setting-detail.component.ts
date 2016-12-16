import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Setting } from '../shared/setting.model';
import { SettingService } from '../shared/setting.service';

@Component({
    templateUrl:'/setting/setting-detail/setting-detail.component.html'
})
export class SettingDetailComponent {
    pageTitle: string = 'Setting Detail';
    setting: Setting;
    constructor(
        private settingservice:SettingService,
        private _router: Router,
        private _route: ActivatedRoute) {
            console.log(this._route.snapshot.params['id']);
    }
    ngOnInit():void{
        this._route.params.forEach((params: Params) => {
            console.log(params["id"]+'aaaa');
            let id = +params["id"];
            let id2= +params["id2"]-1;
            this.getSetting(id,id2);
        })
    }
    getSetting(id: number,id2:number) {
        this.settingservice.getOne(id,id2)
            .then(setting => this.setting = setting);
        console.log(this.setting);
        
    }

    Back(): void {
        this._router.navigate(['setting-list']);
    }
}