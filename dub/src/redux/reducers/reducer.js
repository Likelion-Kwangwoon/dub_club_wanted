import { LOGIN_USER } from '../_actions/types';

function Reducer(state = {}, action) {
  switch (action.type){
      case LOGIN_USER:
          return { ...state, loginSuccess: action.payload } // 그대로 가져온다.
      default:
          return state;
  }
}

export default Reducer