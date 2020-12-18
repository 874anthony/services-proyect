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
// import propietarioRouter from './routes/propietarioRoutes';
// import edificioRouter from './routes/edificioRoutes';
// import apartamentoRouter from './routes/apartamentoRoutes';
// import gestionVisitaRouter from './routes/gestionVisitaRoutes';

// // Handling the middlewares routes
app.use('/api/v1/admins', adminRouter);
// app.use('/api/v1/propietarios', propietarioRouter);
// app.use('/api/v1/edificios', edificioRouter);
// app.use('/api/v1/apartamentos', apartamentoRouter);
// app.use('/api/v1/visitas', gestionVisitaRouter);

module.exports = app;
