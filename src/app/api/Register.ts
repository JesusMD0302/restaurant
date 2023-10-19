import axios from 'axios';


interface FormData {
  Email: string;
  UserName: string;
  PassWord: string;
 

}

const instance = axios.create({
  baseURL: 'http://kaabstore.somee.com/WebAPI_Kaab_Haak/Account/Register'
});

export const register = (data: FormData) => instance.post('', data);
