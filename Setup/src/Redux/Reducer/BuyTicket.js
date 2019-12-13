import { BUYTICKET } from '../action/type';
const BuyTicket = (state = [], action) => {
  switch (action.type) {
    case BUYTICKET:
      let newTicketItem = [action.data];
      return (state = state.concat(newTicketItem));
    default:
      return state;
  }
};
export default BuyTicket;
