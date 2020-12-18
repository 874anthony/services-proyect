// import { NextFunction, Request, Response } from 'express';
// import Apartamento from '../models/apartamentoModel';

// export const getAllApartamentos = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const apartamentos = await Apartamento.find(req.query);

//   res.status(200).json({
//     status: 'success',
//     total: apartamentos.length,
//     data: {
//       apartamentos,
//     },
//   });
// };

// export const crearApartamento = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const body = { ...req.body };
//     const newApartamento = await Apartamento.create(body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         document: newApartamento,
//       },
//     });
//   } catch (err) {
//     return res.status(500).json({
//       status: 'fail',
//       message: 'Ha ocurrido un error en la base de datos FATAL',
//     });
//   }
// };
