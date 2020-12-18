// import { NextFunction, Request, Response } from 'express';
// import GestionVisita from '../models/gestionVisitaModel';

// export const getAllVisitas = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const visitas = await GestionVisita.find(req.query);

//   res.status(200).json({
//     status: 'success',
//     total: visitas.length,
//     data: {
//       visitas,
//     },
//   });
// };

// export const crearVisita = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const body = { ...req.body };
//     const newVisita = await GestionVisita.create(body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         document: newVisita,
//       },
//     });
//   } catch (err) {
//     return res.status(500).json({
//       status: 'fail',
//       message: 'Ha ocurrido un error en la base de datos FATAL',
//     });
//   }
// };
