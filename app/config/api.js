import axios from 'axios';
 
export const ROOT_URL ='https://api.themoviedb.org/3/';
 
export const httpClient = axios.create({
  withCredentials: true,
  baseURL: ROOT_URL , 
});

export const setAuthorizationToken = function(token) {
  if (token) {
    httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete httpClient.defaults.headers.common.Authorization;
  }
};
