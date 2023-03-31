import axios from 'axios';
import { LOGIN_USER } from './types';

function LoginUser(dataToSubmit) {
    
    const request = axios.post('/app/member/sign-in', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export default LoginUser;