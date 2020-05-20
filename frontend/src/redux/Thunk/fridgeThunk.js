import {
  listLoading, listLoaded,
  listError, deleteItem, addProductAC, updateProductAC
} from '../Actions/fridge-actions'

export const loadFridge = (id) => async (dispatch) => {
  dispatch(listLoading());
  try {
    let request = await fetch(`/fridge/${id}`)
    let response = await request.json()
    let { allProducts, tags, message } = response
    if (message === 'success') {
      dispatch(listLoaded(allProducts, tags))
    }
  } catch (err) {
    dispatch(listError(err.message));
  }
}

export const deleteItemThunk = (id) => async (dispatch) => {
  try {
    let req = await fetch(`/fridge/delete/${id}`, {
      method: 'DELETE',
    })
    let res = await req.json()
    if (res.message = 'success') {
      dispatch(deleteItem(id))
    }
  } catch (err) {

  }
}

export const addProductThunk = (product) => async (dispatch) => {
  const res = await fetch('/fridge/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product),
  })

  const json = await res.json()
  if (json.message === 'success') {
    dispatch(addProductAC(json.newItem))
  }
}

export const updateProductThunk = (product) => async (dispatch) => {
  const res = await fetch(`/fridge/update/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product),
  })

  const json = await res.json()
  if (json.message === 'success') {
    dispatch(updateProductAC(product))
  }
}
