import axios from 'axios';

const userInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API}/users`,
});

export const signIn = (user) =>
  userInstance.request({ method: 'POST', data: user, url: '/signIn' });

export const signUp = (user) =>
  userInstance.request({ method: 'POST', data: user, url: '/signUp' });
