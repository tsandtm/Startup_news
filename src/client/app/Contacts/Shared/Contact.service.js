"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ContactService = (function () {
    function ContactService(_http) {
        this._http = _http;
    }
    ContactService.prototype.getContacts = function () {
        // return this._http.get('/api/book')
        //     .map((response: Response) => <Product[]>response.json())
        //     .do(data => console.log('All: ' + JSON.stringify(data)))
        //     .catch(this.handleError);
        return this._http.get('/api/Contact')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.getContact = function (ContactID) {
        return this.getContacts()
            .then(function (response) { return response.find(function (x) { return x.ContactID == ContactID; }); })
            .catch(this.handleError);
    };
    ContactService.prototype.updateContact = function (valueID, valueTag) {
        var params = JSON.stringify({ ContactID: valueID, Contact_Tag: valueTag });
        ;
        var headers = new http_1.Headers();
        console.log(params);
        headers.append('Content-Type', 'application/json');
        // return this._http.post('/api/Contact/Update', params, {
        //     headers: headers
        // })
        return this._http.post('/api/Contact/Update', params, {
            headers: headers,
            body: params
        })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.message || error);
        // return Observable.throw(error.json().error || 'Server error');
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
