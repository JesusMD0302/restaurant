import axios from 'axios';


interface FormData {
  UserName: string;
  Password: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Email: string;
  Phone: string;
  CellPhone: string;
  CreatedAtBranchStoreId: number;
  CustomerTypeId: number;
  Gender: number;
  BirthDate: string;
  BranchStoreIds: string[];


}

const instance = axios.create({
  baseURL: 'http://localhost:5285/api/UserAccount/Customer'
});

export const register = (data: FormData) => instance.post('', data);
