import {
  ADD_PRODUCT_SL,
  DELETE_PRODUCT_SL,
  COMPLETE_PRODUCT_SL,
  SET_PRODUCT_SL,
  CHANGE_INPUT_SL,
} from '../Actions/action-types'

const initialState = {
  loading: false,
  products: [],
  inputTextSL: '',
}

export function shoppingListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_SL:
      return {
        ...state,
        products: [...action.allProducts].sort(function (a, b) {
          if (a.status > b.status) return 1;
          if (a.status < b.status) return -1;
          return 0
        })
      }

    case CHANGE_INPUT_SL:
      return {
        ...state,
        inputTextSL: action.text,
        loading: false,
      }

    case ADD_PRODUCT_SL:
      return {
        ...state,
        products: [...state.products, action.product].sort(function (a, b) {
          if (a.status > b.status) return 1;
          if (a.status < b.status) return -1;
          return 0
        }),
        loading: false,
      }

    case DELETE_PRODUCT_SL:
      return {
        ...state,
        products: state.products.filter(item => item._id !== action.id ? item : false),
        loading: false
      }

    case COMPLETE_PRODUCT_SL:
      return {
        ...state,
        products: state.products
          .map(item => {
            if (item._id === action.id) {
              return { ...item, status: !item.status }
            }
            return item
          })
          .sort(function (a, b) {
            if (a.status > b.status) return 1;
            if (a.status < b.status) return -1;
            return 0
          }),
        loading: false
      }

    default:
      return state
  }
}
