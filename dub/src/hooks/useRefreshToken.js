import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        // 요청과 함께 쿠키를 주고 받고 백엔드로 넘기는 것 
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            // 새로운 엑세스 토큰으로 덮기
            return { ...prev, accessToken: response.data.accessToken }
        });
        // 새로운 엑세스 토큰을 반환
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;