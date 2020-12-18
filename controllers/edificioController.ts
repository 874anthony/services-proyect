// import { NextFunction, Request, Response } from 'express';
// import Edificio from '../models/edificioModel';

// export const getAllEdificios = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const edificios = await Edificio.find(req.query);

//   res.status(200).json({
//     status: 'success',
//     total: edificios.length,
//     data: {
//       edificios,
//     },
//   });
// };

// export const createEdificio = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const body = { ...req.body };
//     const newEdificio = await Edificio.create(body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         document: newEdificio,
//       },
//     });
//   } catch (err) {
//     return res.status(500).json({
//       status: 'fail',
//       message: 'Ha ocurrido un error en la base de datos FATAL',
//     });
//   }
// };
