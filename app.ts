import express from 'express';
import morgan from 'morgan';

const app = express();

//  to recognize the incoming Request Object as a JSON Object.
app.use(express.json());
//  to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: true }));

// Getting the logs.
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// // Routes
import adminRouter from './routes/adminRoutes';

// // Handling the middlewares routes
app.use('/api/v1/admins', adminRouter);

module.exports = app;
