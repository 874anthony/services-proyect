import express from 'express';
import * as adminController from '../controllers/adminController';

const router = express.Router();

router
  .route('/')
  .get(adminController.getAllAdmins)
  .post(adminController.createAdmin);

// Rutas especiales
router.route('/create-table').post(adminController.createAdminTable);
router.route('/create-sequence').post(adminController.createSequenceAdmin);

export default router;
