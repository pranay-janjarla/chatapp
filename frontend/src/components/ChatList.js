import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get('/api/chats');
        setChats(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="chat-list">
      <h2>Your Chats</h2>
      <ul>
        {chats.map(chat => (
          <li key={chat._id} onClick={() => onSelectChat(chat._id)}>
            {chat.participants.map(p => p.username).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
