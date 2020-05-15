import {
  LOGIN_SUCCESS, LOGOUT,
  CHANGE_INPUT_LOGIN, CHANGE_INPUT_PASS, ERROR
} from './action-types'

export function loginAC(userInfo) {
  return {
    type: LOGIN_SUCCESS,
    userInfo,
  }
}

export function logoutAC() {
  return {
    type: LOGOUT,
  }
}

export function changeInputLoginAC(login) {
  return {
    type: CHANGE_INPUT_LOGIN,
    login
  }
}

export function changeInputPassAC(pass) {
  return {
    type: CHANGE_INPUT_PASS,
    pass
  }
}

export function errorAC(status, message) {
  return {
    type: ERROR,
    error: {
      status,
      message,
    }
  }
}
