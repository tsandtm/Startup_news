

// đây là vùng import tất cả các modules bên ngoài
import * as express from 'express';
import * as body_parser from 'body-parser';


// khai báo app chính
let app = express();

// sử dụng các middleware
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());


// import router
import {BookRouter} from './routes/book.router';
import {ContactsRouter} from './routes/contacts.router';
import {NotificationsRouter} from './routes/notifications.router';
import {YeucaubanRouter} from './routes/yeucauban.router';



// sử dụng các router được định nghĩa từ các modules
app.use('/api', [(new BookRouter()).getRouter()]);
app.use('/api',[(new ContactsRouter()).getRouter()]);
app.use('/api',[(new NotificationsRouter()).getRouter()]);
app.use('/api',[(new YeucaubanRouter()).getRouter()]);
export default app;
