import { NextFunction, Request, Response } from 'express';
import db from '../server';

export const createSequenceAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const consulta =
      'CREATE SEQUENCE admins_seq AS BIGINT START WITH 1 INCREMENT BY 1 MINVALUE 1';

    await db.query(consulta, (error, results, fields) => {
      res.status(200).json({
        status: 'success',
        nuevaTabla: results,
        message: 'Secuencia creada con éxito en la base de datos!',
      });
    });
  } catch (err) {
    return res.status(500).json({
      status: 'success',
      message:
        'Hemos tenido un error en la base de datos, vuelve a intentarlo nuevamente.',
      error: err,
    });
  }
};

export const createAdminTable = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const consulta =
      'CREATE TABLE `serviceproyectdb`.`administradores` ( `idAdministrador` BIGINT(100) NOT NULL , `nombreRazonSocialAdministrador` VARCHAR(100) NOT NULL , `telefonoAdministrador` INT(10) NOT NULL , `direccionAdministrador` VARCHAR(50) NOT NULL , `emailAdministrador` VARCHAR(50) NOT NULL , PRIMARY KEY (`idAdministrador`), UNIQUE `emailAdmin` (`emailAdministrador`), UNIQUE `telefonoAdmin` (`telefonoAdministrador`)) ENGINE = InnoDB';

    await db.query(consulta, (error, results, fields) => {
      res.status(200).json({
        status: 'success',
        nuevaTabla: results,
        message: 'Tabla creada con éxito en la base de datos!',
      });
    });
  } catch (err) {
    return res.status(500).json({
      status: 'success',
      message:
        'Hemos tenido un error en la base de datos, vuelve a intentarlo nuevamente.',
      error: err,
    });
  }
};

export const getAllAdmins = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const consulta = 'SELECT * FROM administradores';

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
    return res.status(500).json({
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
    // Escribo la consulta
    const consulta =
      'INSERT INTO `administradores` (`idAdministrador`, `nombreRazonSocialAdministrador`, `telefonoAdministrador`, `direccionAdministrador`, `emailAdministrador`) VALUES ?';

    // Defino los valores que inyectaré a la consulta.
    const body = [
      [
        req.body.idAdministrador,
        req.body.nombreRazonSocialAdministrador,
        req.body.telefonoAdministrador,
        req.body.direccionAdministrador,
        req.body.emailAdministrador,
      ],
    ];

    console.log(body);

    // Hago la petición a la BD
    await db.query(consulta, [body], (error, results, fields) => {
      res.status(200).json({
        status: 'success',
        data: {
          nuevoAdmin: 'Se ha creado un administrador exitosamente',
          numeroTablasAfectadas: results.affectedRows,
        },
      });
    });
  } catch (err) {
    return res.status(500).json({
      status: 'success',
      message:
        'Hemos tenido un error en la base de datos, vuelve a intentarlo nuevamente.',
      error: err,
    });
  }
};
