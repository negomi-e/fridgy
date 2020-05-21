import {
  ADD_PRODUCT_SL,
  DELETE_PRODUCT_SL,
  COMPLETE_PRODUCT_SL,
  SET_PRODUCT_SL,
  CHANGE_INPUT_SL,
} from './action-types'


export function addProductSL_AC(product) {
  return {
    type: ADD_PRODUCT_SL,
    product,
  }
}

export function deleteProductSL_AC(id) {
  return {
    type: DELETE_PRODUCT_SL,
    id,
  }
}

export function completeProductSL_AC(id) {
  return {
    type: COMPLETE_PRODUCT_SL,
    id,
  }
}

export function setProductSL_AC(allProducts) {
  return {
    type: SET_PRODUCT_SL,
    allProducts
  }
}

export function changeInputSL_AC(text) {
  return {
    type: CHANGE_INPUT_SL,
    text
  }
}




