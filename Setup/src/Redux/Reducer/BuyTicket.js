import { BUYTICKET } from '../action/type';
const BuyTicket = (state = [], action) => {
  console.log('AAAAAA', action.data);
  switch (action.type) {
    case BUYTICKET:
      console.log('đã vô');
      let newTicketItem = [action.data];
      return (state = state.concat(newTicketItem));
    default:
      return state;
  }
};
export default BuyTicket;
