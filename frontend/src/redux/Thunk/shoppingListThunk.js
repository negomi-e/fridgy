import {
  setProductSL_AC, addProductSL_AC,
  deleteProductSL_AC, completeProductSL_AC, deleteAllAC
} from '../Actions/actions-sl'
import {
  alertErrorAC, alertSuccesAC
} from '../Actions/actions'

export const setProductSL_Thunk = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`/shopping-list/${userId}`)
    const allProducts = await res.json()
    dispatch(setProductSL_AC(allProducts))
  } catch (error) {
    dispatch(alertErrorAC())
  }
}

export const addProductSL_Thunk = (text, userId) => async (dispatch) => {
  try {
    const res = await fetch('/shopping-list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        text
      }),
    })
    const product = await res.json()
    if (product.message === 'success') {
      dispatch(addProductSL_AC(product.createdProduct))
      dispatch(alertSuccesAC())
    }
  } catch (error) {
    dispatch(alertErrorAC())
  }
}

export const deleteProductSL_Thunk = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/shopping-list/${id}`, {
      method: 'DELETE'
    })
    const json = await res.json()
    if (json.message === 'success') {
      dispatch(deleteProductSL_AC(id))
    }
  } catch (error) {
    console.log(error)
  }
}

export const completeProductSL_Thunk = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/shopping-list/${id}`, {
      method: 'PUT'
    })
    const json = await res.json()
    if (json.message === 'success') {
      dispatch(completeProductSL_AC(id))
    }
  } catch (error) {
    console.log(error)
  }
}

export const deleteAllThunk = () => async (dispatch) => {
  try {
    const res = await fetch('/shopping-list/delete/all', {
      method: 'DELETE'
    })
    const json = await res.json()
    if (json.message === 'success') {
      dispatch(deleteAllAC())
    }
  } catch (error) {
    dispatch(alertErrorAC())
  }
}

