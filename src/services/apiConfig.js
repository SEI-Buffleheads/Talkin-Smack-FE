import axios from "axios";

apiUrl = "https://talking-smack-2be-production.up.railway.app/";


const api = axios.create({
  baseURL: apiUrl,
});

export default api;