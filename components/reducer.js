import {SET_DATA,LOADER_TOGGLE,SET_EMAIL,SET_NUMBER} from './action';

const initialState = {
  unidata:[],
  loader:true,
  number:'',
  email:''
};

export default (state=initialState,action)=>{
  switch(action.type){
    case SET_DATA:
      return{
        ...state,unidata:action.payload,
            };
    case LOADER_TOGGLE:
      return{
        ...state,loader:action.payload
      };
    case SET_NUMBER:
      return{
        ...state,name:action.payload
      };
    case SET_EMAIL:
      return{
        ...state,email:action.payload
      };
    default:
      return state;
}
};