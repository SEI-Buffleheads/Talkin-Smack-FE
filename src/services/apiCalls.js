import api from "./apiConfig.js";

export const verifyUser = async (token) => {
  const axiosConfig = {
    headers: {
      "Authorization":`Token ${token}`
    }
  }
  try {
    const response = await api.get("/profile", axiosConfig);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get("/profiles");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComments = async () => {
  try {
    const response = await api.get("/comments");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCommentsOnPost = async (id) => {
  try {
    const response = await api.get(`posts/${id}/comments`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
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
  const axiosConfig = {
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await api.post("/login", userData, axiosConfig);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (id, commentData, token) => {
  try {
    const response = await api.post(`/posts/${id}/comments`, commentData,{
      headers: {"Authorization":`Token ${token}`}
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData, token) => {
  try {
    const response = await api.post("/posts", postData, {
      headers: {"Authorization":`Token ${token}`}
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData, token) => {
  try {
    const response = await api.put(`/profiles/${id}`, userData, {
      headers: {"Authorization":`Token ${token}`}
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id, token) => {
  try {
    const response = await api.delete(`/profiles/${id}`, {
      headers: {"Authorization":`Token ${token}`}
    });
    return response.data;
  } catch (error) {
    throw error;
  } 
};

// const userInfo = {
//   username: "Ottavia",
//   password: "12345"
// }

// const comment = {
//   content: "Hello world"
// }

// const token = await loginUser(userInfo)

// console.log(await createComment(188, comment, token.token))

