

// đây là vùng import tất cả các modules bên ngoài
import * as express from 'express';
import * as body_parser from 'body-parser';


// khai báo app chính
let app = express();

// sử dụng các middleware
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');  
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization');
  next();
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

});


// import router
import {BookRouter} from './routes/book.router';
import {NewsRouter} from './routes/news.router';
import {WebsRouter} from './routes/website.router';
import{UserWebsRouter} from './routes/user_website.router'
import {UserRouter} from './routes/user.router';
// sử dụng các router được định nghĩa từ các modules
app.use('/api', [(new BookRouter()).getRouter(),(new NewsRouter()).getRouter(), (new WebsRouter()).getRouter(),(new UserWebsRouter()).getRouter(),new UserRouter().getRouter()]);

export default app;
