import {
  LOGIN_SUCCESS, LOGOUT,
  ERROR, CHANGE_INPUT, ALERT_ERROR, ALERT_SUCCESS,
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

export function alertSuccesAC(message) {
  return {
    type: ALERT_SUCCESS,
    message
  }
}

export function alertErrorAC(message) {
  return {
    type: ALERT_ERROR,
    message
  }
}

