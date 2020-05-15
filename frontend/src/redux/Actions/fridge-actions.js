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
