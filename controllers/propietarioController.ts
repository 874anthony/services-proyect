// import { NextFunction, Request, Response } from 'express';
// import Propietario from '../models/propietarioModel';

// export const getAllPropietarios = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const propietarios = await Propietario.find(req.query);

//   res.status(200).json({
//     status: 'success',
//     total: propietarios.length,
//     data: {
//       propietarios,
//     },
//   });
// };

// export const createPropietario = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const body = { ...req.body };
//     const newPropietario = await Propietario.create(body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         document: newPropietario,
//       },
//     });
//   } catch (err) {
//     return res.status(500).json({
//       status: 'fail',
//       message: 'Ha ocurrido un error en la base de datos FATAL',
//     });
//   }
// };
