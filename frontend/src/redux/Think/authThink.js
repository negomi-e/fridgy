import { loginAC, errorAC } from '../Actions/actions'

export const thunkLogin = (email, pass) => async (dispatch) => {
  try {
    const res = await fetch(`/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        pass
      }),
    })
    const json = await res.json()
    if (json.message === 'success') {
      dispatch(loginAC())
    } else {
      throw json
    }
  } catch (error) {
    dispatch(errorAC(true, error))
  }

}

