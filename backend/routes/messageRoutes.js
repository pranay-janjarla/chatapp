import express from 'express';
import { getMessages, sendMessage } from '../controllers/messageController.js';

const router = express.Router();

router.get('/:chatId', getMessages);
router.post('/:chatId', sendMessage);

export default router;
