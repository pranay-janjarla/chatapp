import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const ChatPage = () => {
  const { authData, logout } = useAuth();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chats', {
          headers: {
            Authorization: `Bearer ${authData.token}`
          }
        });
        setChats(response.data);
      } catch (error) {
        console.error('Failed to fetch chats', error);
      }
    };
    fetchChats();
  }, [authData]);

  return (
    <div>
      <h2>Chat</h2>
      <button onClick={logout}>Logout</button>
      {chats.map(chat => (
        <div key={chat._id}>
          <h3>{chat.participants.map(p => p.username).join(', ')}</h3>
        </div>
      ))}
    </div>
  );
};

export default ChatPage;
