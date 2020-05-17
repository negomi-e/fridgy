import { setProductSL_AC, addProductSL_AC, deleteProductSL_AC, completeProductSL_AC } from '../Actions/actions-sl'

export const setProductSL_Thunk = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`/shopping-list/${userId}`)
    const allProducts = await res.json()
    dispatch(setProductSL_AC(allProducts))
  } catch (error) {
    console.log(error)
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
    dispatch(addProductSL_AC(product.createdProduct))
  } catch (error) {
    console.log(error)
  }
}

export const deleteProductSL_Thunk = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/shopping-list/${id}`, {
      method: 'DELETE'
    })
    const json = await res.json()
    dispatch(deleteProductSL_AC(id))
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
    dispatch(completeProductSL_AC(id))
  } catch (error) {
    console.log(error)
  }
}


