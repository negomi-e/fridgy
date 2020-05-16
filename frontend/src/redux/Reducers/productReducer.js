import { LIST_LOADING, LIST_LOADED, LIST_ERROR, LOAD_ITEMS } from '../Actions/action-types';

const initialState = {
  loading: false,
  items: false,
  listError: false,
  itemsApi: "",
  searchTags: ['beef', 'egg', 'milk', 'bisquits', 'potato', 'mashrooms'],
};

export function productReducer (state = initialState, action) {
  switch (action.type) {
    case LIST_LOADING:
      return {
        ...state,
        loading: true,
        items: false,
        listError: false,
      };
    case LIST_LOADED:
      return {
        ...state,
        loading: false,
        items: action.payload,
        listError: false,
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
      itemsApi: [newItem]
    }
    default:
      return state;
  }
};
