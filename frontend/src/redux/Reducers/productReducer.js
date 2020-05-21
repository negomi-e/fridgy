
import {
  LIST_LOADING, LIST_LOADED, LIST_ERROR, SEARCH,
  LOAD_ITEMS, LOAD_LABEL, DELETE_ITEM, ADD_PRODUCT, UPDATE_PRODUCT
} from '../Actions/action-types';


const initialState = {
  loading: false,
  items: [],
  listError: false,
  itemsApi: "",
  searchTags: [],
  label: "",
  tempItems: []
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
        searchTags: action.tags,
        tempItems: action.items,
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
        items: [...state.items, action.product],
        tempItems: [...state.tempItems, action.product]
      }
    case UPDATE_PRODUCT:
      const updatedItems = state.items.map(product => {
        if (product.id === action.id)
          return action.data
      })
      return {
        ...state,
        items: updatedItems
      }

    case SEARCH:
      const sortedArray = state.tempItems.filter(product => {
        const itemSearching = action.text.toLowerCase()
        const label = product.label.toLowerCase()
        const category = product.category.toLowerCase()
        const dayRemaining = String(product.dayRemaining)

        if (label.includes(itemSearching)) return product

        if (category.includes(itemSearching)) return product

        if (dayRemaining.includes(itemSearching)) return product

      }, false)
      return {
        ...state,
        items: sortedArray
      }

    default:
      return state;
  }
};
