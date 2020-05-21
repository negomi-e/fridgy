import {
  ADD_PRODUCT_SL,
  DELETE_PRODUCT_SL,
  COMPLETE_PRODUCT_SL,
  SET_PRODUCT_SL,
  CHANGE_INPUT_SL,
  ALERT_ERROR,
  ALERT_SUCCESS,
  DELETE_ALL_SL,

} from '../Actions/action-types'

const initialState = {
  loading: false,
  errorAlert: false,
  successAlert: false,
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
        inputTextSL: '',
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
    case ALERT_ERROR:
      return {
        ...state,
        errorAlert: !state.errorAlert,
      }
    case ALERT_SUCCESS:
      return {
        ...state,
        successAlert: !state.successAlert,
      }
    case DELETE_ALL_SL:
      return {
        ...state,
        products: []
      }

    default:
      return state
  }
}
