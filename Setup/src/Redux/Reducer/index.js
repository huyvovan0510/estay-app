import Like from './Liked';
import BuyTicket from './BuyTicket';
import { combineReducers } from 'redux';
const reducer = combineReducers({ Like: Like, BuyTicket: BuyTicket });

export default reducer;
