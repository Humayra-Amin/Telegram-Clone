import axios from 'axios';

const API_BASE_URL = 'https://devapi.beyondchats.com/api';

export const getAllChats = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get_all_chats?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chats:', error);
    throw error;
  }
};

export const getChatMessages = async (chatId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get_chat_messages?chat_id=${chatId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chat messages:', error);
    throw error;
  }
};
