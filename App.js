/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import Navigation from './components/Navigation';
import reducer from './components/reducer';
import { Provider } from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const rootReducer= combineReducers({
  data:reducer,
})

class App extends Component {
  render(){
    const store = createStore(rootReducer,applyMiddleware(ReduxThunk));
    return(
    <Provider store={store}>
    <Navigation/>
    </Provider>);
  }
}
export default App;
