import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './Auth';

// Auth.js에서 선언한 reducer 사용하기 위해 다음을 선언
export default configureStore({
    reducer: {
        authToken: tokenReducer,
    },
});
