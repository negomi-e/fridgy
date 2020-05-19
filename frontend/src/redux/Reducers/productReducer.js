
import {
  LIST_LOADING, LIST_LOADED, LIST_ERROR,
  LOAD_ITEMS, LOAD_LABEL, DELETE_ITEM, ADD_PRODUCT
} from '../Actions/action-types';


const initialState = {
  loading: false,
  items: [],
  listError: false,
  itemsApi: "",
  searchTags: [],
  label: "",
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_LOADING:
      return {
        ...state,
        loading: true,
        listError: false,
      };
    case LIST_LOADED:
      return {
        ...state,
        loading: false,
        items: action.items,
        listError: false,
        searchTags: action.tags
      };
    case LIST_ERROR:
      return {
        ...state,
        loading: false,
        items: false,
        listError: action.payload,
      };
    case LOAD_ITEMS:
      const newItem = action.payload;
      return {
        ...state,
        itemsApi: [newItem],
        loading: false,
      }

    case LOAD_LABEL:
      return {
        ...state,
        label: action.payload
      }

    case DELETE_ITEM:
      const updatedArray = state.items.filter(product => product._id !== action.id ? product : false);
      return {
        ...state,
        items: [...updatedArray]
      }

    case ADD_PRODUCT:
      return {
        ...state,
        items: [...state.items, action.product]
      }

    default:
      return state;
  }
};
