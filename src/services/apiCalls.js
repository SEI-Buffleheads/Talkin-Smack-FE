import api from "./apiConfig.js";

export const getUsers = async () => {
  try {
    const response = await api.get("/profiles/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComments = async () => {
  try {
    const response = await api.get("/comments/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCommentsOnPost = async (id) => {
  try {
    const response = await api.get(`posts/${id}/comments/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await api.get("/posts/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`/profiles/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
   const axiosConfig = {
    headers: {'Content-Type': 'application/json'}
  }
  try {
    const response = await api.post("/signup", userData, axiosConfig);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/login/", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (id, commentData) => {
  try {
    const response = await api.post(`posts/${id}/comments/`, commentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post("/posts/", postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/profiles/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/profiles/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  } 
};

