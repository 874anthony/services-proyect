import { NextFunction, Request, Response } from 'express';
import db from '../server';

export const getAllAdmins = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const consulta = `SELECT * FROM administradores`;

    // Hago la petición a la BD
    await db.query(consulta, (error, results, fields) => {
      // Convierto el objeto results a String
      const dataString = JSON.stringify(results);

      // Parseo el String a data format JSON
      const dataJson = JSON.parse(dataString);

      res.status(200).json({
        status: 'success',
        total: results.length,
        data: {
          admins: dataJson,
        },
      });
    });
  } catch (err) {
    res.status(500).json({
      status: 'success',
      message:
        'Hemos tenido un error en la base de datos, vuelve a intentarlo nuevamente.',
      error: err,
    });
  }
};

export const createAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const consulta =
      "INSERT INTO `administradores` (`idAdministrador`, `nombreRazonSocialAdministrador`, `telefonoAdministrador`, `direccionAdministrador`, `emailAdministrador`) VALUES ('3', 'Banquero', '3004164299', 'Cra 65 # 63-28', 'dondevilma@test.com')";

    // Hago la petición a la BD
    await db.query(consulta, (error, results, fields) => {
      console.log(fields);

      res.status(200).json({
        status: 'success',
        data: {
          nuevoAdmin: results,
        },
      });
    });
  } catch (err) {
    res.status(500).json({
      status: 'success',
      message:
        'Hemos tenido un error en la base de datos, vuelve a intentarlo nuevamente.',
      error: err,
    });
  }
};
