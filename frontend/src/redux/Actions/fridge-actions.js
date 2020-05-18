
import { LIST_LOADING, LIST_LOADED, LIST_ERROR, LOAD_ITEMS, LOAD_LABEL, DELETE_ITEM } from './action-types';


export function listLoading() {
  return {
    type: LIST_LOADING,
  };
}

export function listLoaded(list) {
  return {
    type: LIST_LOADED,
    payload: list,
  };
}

export function listError(err) {
  return {
    type: LIST_ERROR,
    payload: err,
  };
}

export function deleteItem(id, category) {
  return {
    type: DELETE_ITEM,
    elementID: id,
    category: category
  };
}

export const loadItems = (search) => {
  return async (dispatch) => {
    let response = await fetch(`https://yummly2.p.rapidapi.com/feeds/search?FAT_KCALMax=1000&maxTotalTimeInSeconds=7200&allowedAttribute=diet-lacto-vegetarian%252Cdiet-low-fodmap&q=${search}&start=0&maxResult=3`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yummly2.p.rapidapi.com",
        "x-rapidapi-key": "bc823de7d7msh02ef7b6e50fa82bp1df302jsn3b6fce001d4a"
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
