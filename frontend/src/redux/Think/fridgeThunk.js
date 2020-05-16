import { listLoading, listLoaded,listError } from '../Actions/fridge-actions'
export const loadFridge = (id) => async (dispatch) => {
            dispatch(listLoading());
            //   console.log('current state:', getState());
          
          try{
              let request = await fetch(`/fridge/${id}`)
              let response = await request.json()
              // console.log('HERE IS THE DATA AFTER POST', response);
              dispatch(listLoaded(response))
            }catch(err){
              dispatch(listError(err.message));
            }
        }
    