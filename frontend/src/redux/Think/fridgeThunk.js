<<<<<<< HEAD
import { listLoading, listLoaded,listError, deleteItem  } from '../Actions/fridge-actions'
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

export const deleteItemThunk = (id, category) => async (dispatch) =>{
  
  try{
    let req = await fetch(`/fridge/delete/${id}`,{
      method: 'DELETE',
    })
    let res = await req.json()
    console.log('response from delete fetch- is it true?', res)
    
    if(res){
    dispatch(deleteItem(id, category))

    }
  }catch(err){
    
  }
}
    
=======
import { listLoading, listLoaded, listError } from '../Actions/fridge-actions'
export const loadFridge = (id) => async (dispatch) => {
  dispatch(listLoading());
  //   console.log('current state:', getState());

  try {
    let request = await fetch(`/fridge/${id}`)
    let response = await request.json()
    // console.log('HERE IS THE DATA AFTER POST', response);
    dispatch(listLoaded(response))
  } catch (err) {
    dispatch(listError(err.message));
  }
}


>>>>>>> ab850a89f89dad043111499c31f46ff07e387f5b
