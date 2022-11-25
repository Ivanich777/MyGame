import Card from '../features/CardList/types/Card';
import User, { Res } from '../features/Auth/types/User';

 export const loadCards = async (): Promise< Card[] > => {
    const res = await fetch('http://localhost:4000/api');
    return res.json();
};
export const registration = async (item: User):Promise<Res> => {
    const res = await fetch('http://localhost:4000/auth/registration', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(item),
    });
    return res.json();
  };

  export const login = async (item: User): Promise<Res> => {
    const res = await fetch('http://localhost:4000/auth/login', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(item),
    });
    return res.json();
  };

  export const logout = async (): Promise<Res> => {
    const res = await fetch('http://localhost:4000/auth/logout', { credentials: 'include' });
    return res.json();
  };

  export const checkUser = async ():Promise<Res> => {
    const res = await fetch('http://localhost:4000/auth/login', { credentials: 'include' });
    return res.json();
  };
