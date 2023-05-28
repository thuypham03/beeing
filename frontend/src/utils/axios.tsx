import axios from "axios";
const api = axios.create({ baseURL: 'http://192.168.50.112:8080' });
export default api;
