import express from 'express';
import generalController from '../controllers/general';

const router = express.Router();

router.get('/getSchema', generalController.getSchema);

router.post('/processTransaction', generalController.processTransaction);

router.post(
    '/transactionResponseHook',
    generalController.transactionResponseHook
);

export default router;
