"use strict";
// đây là vùng import tất cả các modules bên ngoài
var express = require('express');
var body_parser = require('body-parser');
// khai báo app chính
var app = express();
// sử dụng các middleware
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
// import router
var book_router_1 = require('./routes/book.router');
var Contact_router_1 = require('./routes/Contact.router');
var Report_router_1 = require('./routes/Report.router');
// sử dụng các router được định nghĩa từ các modules
app.use('/api', [(new book_router_1.BookRouter()).getRouter(), (new Contact_router_1.ContactRouter()).getRouter(), (new Report_router_1.ReportRouter()).getRouter()]);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;