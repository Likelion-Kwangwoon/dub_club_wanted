import axios from 'axios';
import store from "../redux/store";

const baseURL = process.env.REACT_APP_URL;

export const socialSignin = async (data) => {
  try {
    const res = await axios.post(
      `${baseURL}/app/member/loginKakao`,
      {
        authorizationCode: data,
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
const instanceUtil = axios.create({
  baseURL,
  headers: {
    "Content-Type" : "application/json",
  },
});

instanceUtil.interceptors.request.use(
  (config) => {
    const token = store.getState().token.token;
    const expirationTime = store.getState().token.expirationTime;

    if (!!token && expirationTime > new Date().getTime()) {
      config.headers.Authorization = token;
    } else {
      sessionStorage.clear();
      window.location.replace("/");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);