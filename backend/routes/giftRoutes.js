import express from 'express';
import {addGift} from '../controllers/giftControllers.js';

const router = express.Router();


router.post('/addgift', addGift);

export default router;