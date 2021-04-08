import axios from 'axios';
export const SET_DATA = 'set_data';
export const LOADER_TOGGLE='loader_toggle';
export const SET_NUMBER='set_number';
export const SET_EMAIL ='set_email';
export const fetchData =()=>{
  return(dispatch)=>{
    dispatch({
      type:LOADER_TOGGLE,
      payload:true
    })
    axios({
      method:'GET',
      url:'http://universities.hipolabs.com/search?country=United+States',
    }).then((response)=>{
      // console.log(response)
      const loadedData = response.data;
      dispatch({
        type:SET_DATA,
        payload:loadedData
      })
      dispatch({
        type:LOADER_TOGGLE,
        payload:false
      })
    }).catch((error)=>{
      console.log(error,'IN error of API');
    })
  }
}

export const set_number = (number)=>{
return{
  type:SET_NUMBER,
  payload:number
};
};

export const set_email = (email)=>{
  return{
    type:SET_EMAIL,
    payload:email
  };
  };