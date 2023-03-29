import axios from 'axios';
//const BASE_URL = 'http://localhost:3500';

const BASE_URL = 'Http://ec2-43-201-109-234.ap-northeast-2.compute.amazonaws.com:8080';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    // 실패시 403 뜰 것
    // 백그라운드에서 작동
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});