import {
  LOGIN_SUCCESS, LOGOUT,
  ERROR, CHANGE_INPUT
} from '../Actions/action-types'

const initialState = {
  loginStatus: !!window.localStorage.getItem('loginStatus') || false,
  userInfo: {
    email: window.localStorage.getItem('email') || false,
    id: window.localStorage.getItem('id') || false,
  },
  error: {
    status: false,
    message: '',
  },
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:

      window.localStorage.setItem('loginStatus', 'true');
      window.localStorage.setItem('id', action.userInfo.id);
      window.localStorage.setItem('email', action.userInfo.email);

      return {
        ...state,
        loginStatus: true,
        userInfo: { ...action.userInfo },
        error: {
          status: false,
          message: '',
        },
      }

    case LOGOUT:
      window.localStorage.clear()
      return {
        ...state,
        loginStatus: false,
        userInfo: {},
      }

    case CHANGE_INPUT:
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [action.inputName]: action.inputValue
        },
      }

    case ERROR:
      return {
        ...state,
        error: { ...action.error }
      }

    default:
      return state;
  }
}

