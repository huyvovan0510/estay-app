import { createStore } from 'redux';
import reducer from '../Reducer';
const store = createStore(reducer);
console.log('STORE', store.getState());
export default store;
