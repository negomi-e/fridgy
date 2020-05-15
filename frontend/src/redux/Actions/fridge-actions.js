import { LIST_LOADING, LIST_LOADED, LIST_ERROR } from './action-types';

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

export function loadFridge() {

    return async function (dispatch, getState) { // thunk
        dispatch(listLoading());
          console.log('current state:', getState());
      
      try{
          let request = await fetch(`https://localhost:5000/fridge/`, {
            method: 'GET',
            body: JSON.stringify({
                email: 'Alex@ya.ru'
            })
          })
          let response = await request.json()
          console.log('HERE IS THE DATA AFTER POST', response);
          dispatch(listLoaded(response))
        }catch(err){
          dispatch(listError(err.message));
        }
    }
}
