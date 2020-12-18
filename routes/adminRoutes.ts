import express from 'express';
import * as adminController from '../controllers/adminController';

const router = express.Router();

router
  .route('/')
  .get(adminController.getAllAdmins)
  .post(adminController.createAdmin);

export default router;
