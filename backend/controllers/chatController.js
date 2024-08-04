import Chat from '../models/Chat.js';

export const getChats = async (req, res) => {
  try {
    const chats = await Chat.find({ participants: req.userId }).populate('participants', 'username');
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const createChat = async (req, res) => {
  const { participants } = req.body;
  try {
    const newChat = await Chat.create({ participants });
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
