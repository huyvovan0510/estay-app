import { LIKED, UNLIKE } from '../action/type';

const Like = (state = [], action) => {
  switch (action.type) {
    case LIKED:
      let newLikeItem = [action.data];
      return (state = state.concat(newLikeItem));
    case UNLIKE:
      let id = action.data.id;
      return state.filter(item => {
        return item.id != id;
      });
    default:
      return state;
  }
};
export default Like;
