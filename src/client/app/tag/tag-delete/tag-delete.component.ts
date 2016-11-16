import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Tag } from '../shared/tag.model';
import { TagService } from '../shared/tag.service';

@Component({
    templateUrl:'/tag/tag-delete/tag-delete.component.html'
})
export class TagDeleteComponent {
    pageTitle: string = 'Tag Delete';
    @Input() tag: Tag;
    constructor(
        private tagservice:TagService,
        private _router: Router,
        private _route: ActivatedRoute) {

    }
  
    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            console.log(params["id"]+'aaaa');
            let id = +params["id"];
            this.getTag(id);
            console.log(this.tag.tagid+this.tag.tagnamedisplay);
        })
    }

    getTag(id: number) {
        this.tagservice.getOne(id)
            .then(tag => this.tag = tag)
        
    }
    Back(): void {
        this._router.navigate(['tag-list']);
    }
    Delete(): void{
        this.tagservice.Delete(this.tag).then(result=>this._router.navigate(['tag-list']));
    }
}