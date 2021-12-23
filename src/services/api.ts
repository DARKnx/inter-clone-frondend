import axios from 'axios';



 const api = axios.create({
   baseURL:'http://localhost:3334'
})

api.interceptors.request.use(config => {

 const token = localStorage.getItem('@Inter:Token' || '');

 
 config.headers = {
   'Authorization': `Bearer ${token}`
 }

 return config
})

export default api;