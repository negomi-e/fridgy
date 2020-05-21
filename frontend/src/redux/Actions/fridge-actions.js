
import {
  LIST_LOADING, LIST_LOADED, LIST_ERROR,
  LOAD_ITEMS, LOAD_LABEL, DELETE_ITEM,
  ADD_PRODUCT, UPDATE_PRODUCT, SEARCH
} from './action-types';


export function listLoading() {
  return {
    type: LIST_LOADING,
  };
}

export function listLoaded(allProducts, tags) {
  return {
    type: LIST_LOADED,
    items: allProducts,
    tags
  };
}

export function listError(err) {
  return {
    type: LIST_ERROR,
    payload: err,
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id,
  };
}

export const loadItems = (search) => {
  return async (dispatch) => {
    let response = await fetch(`https://yummly2.p.rapidapi.com/feeds/search?FAT_KCALMax=1000&maxTotalTimeInSeconds=7200&allowedAttribute=diet-lacto-vegetarian%252Cdiet-low-fodmap&q=${search}&start=0&maxResult=3`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yummly2.p.rapidapi.com",
        "x-rapidapi-key": "b4bd3b9d07mshaef0e18dd786026p18c996jsn0633e759ede4"
      }
    })
    let json = await response.json();
    let { feed } = json
    dispatch(takeItems(feed))

  }
}

export const takeItems = (items) => {
  return {
    type: LOAD_ITEMS,
    payload: items
  }
}

export const getRecipes = (item) => {
  return {
    type: LOAD_LABEL,
    payload: item
  }
}

export function addProductAC(product) {
  return {
    type: ADD_PRODUCT,
    product,
  }
}

export function updateProductAC(data) {
  return {
    type: UPDATE_PRODUCT,
    id: data.id,
    data: data,
  }
}

export function searchAC(text) {
  return {
    type: SEARCH,
    text
  }
}
