import api from "./apiConfig.js";

export const getUsers = async () => {
  try {
    const response = await api.get("/User/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComments = async () => {
  try {
    const response = await api.get("/Comment/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await api.get("/Post/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`/Users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("/Users", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (commentData) => {
  try {
    const response = await api.post("/Comment", commentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post("/Post", postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/Users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/Users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  } 
};
