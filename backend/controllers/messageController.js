import Message from '../models/Message.js';

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId }).populate('sender', 'username');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const sendMessage = async (req, res) => {
  const { text } = req.body;
  const { chatId } = req.params;
  try {
    const newMessage = await Message.create({ text, chatId, sender: req.userId });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
