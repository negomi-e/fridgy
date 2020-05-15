import {
  LOGIN_SUCCESS, LOGOUT,
  CHANGE_INPUT_PASS, CHANGE_INPUT_LOGIN, ERROR
} from '../Actions/action-types'

const initialState = {
  loginStatus: !!window.localStorage.getItem('isAuthenticated') || false,
  userInfo: {

  },
  inputLogin: '',
  inputPass: '',
  error: {
    status: false,
    message: '',
  },
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      window.localStorage.setItem('isAuthenticated', 'true');
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

    case CHANGE_INPUT_PASS:
      return {
        ...state,
        inputPass: action.pass,
      }

    case CHANGE_INPUT_LOGIN:
      return {
        ...state,
        inputLogin: action.login,
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

