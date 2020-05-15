import { loginAC, errorAC } from '../Actions/actions'

export const thunkLogin = (email, pass) => async (dispatch) => {
  try {
    const res = await fetch(`/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        pass
      }),
    })
    const json = await res.json()
    if (json.message === 'success') {
      dispatch(loginAC(json.userInfo))
    } else {
      throw json
    }
  } catch (error) {
    dispatch(errorAC(true, error))
  }
}

export const thunkRegistration = (email, firstName, lastName, pass) => async (dispatch) => {
  try {
    const res = await fetch(`/auth/registration`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        pass,
      }),
    })
    const json = await res.json()
    if (json.message === 'success') {
      dispatch(loginAC(json.userInfo))
    } else {
      throw json
    }
  } catch (error) {
    dispatch(errorAC(true, error))
  }
}
