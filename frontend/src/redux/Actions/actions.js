import {
  LOGIN_SUCCESS, LOGOUT,
  ERROR, CHANGE_INPUT
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

export function changeInputAC(formName, inputName, inputValue) {
  return {
    type: CHANGE_INPUT,
    formName,
    inputName,
    inputValue,
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
