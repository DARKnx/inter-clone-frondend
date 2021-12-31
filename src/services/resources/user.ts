import api from '../api';

export interface SignInData {
    email: string;
    password: string;
}
export interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface userDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    accountNumber: number;
    accountDigit: number;
    wallet: number;
    

}

export const signIn = async  (data: SignInData) => {

return api.post('/user/signin',  data).catch(e => {
    return {data:{acessToken: '', status: 'error', message: e?.message}}
  })

}

export const signUp = async  (data: SignUpData) => {

 return api.post('/user/signup',  data).catch(e => {
    return {data:{acessToken: '', status: 'error', message: e?.message}}
  })

}

export const me = async  () => {
 return api.get<userDto>('/user/me');
}