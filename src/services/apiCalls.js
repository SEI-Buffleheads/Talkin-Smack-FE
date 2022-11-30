import api from "./apiConfig.js";

export const getUsers = async () => {
  try {
    const response = await api.get("/users/");
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

export const getPosts = async () => {
  try {
    const response = await api.get("/post/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("/users/", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (commentData) => {
  try {
    const response = await api.post("/comments/", commentData);
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
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  } 
};
