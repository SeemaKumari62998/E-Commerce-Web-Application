
import { ADD_TO_CART } from '../constants';

const initialState = {
  cardData: []
};

export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // Assuming action.data is an array of cart items
      return {
        ...state,
        cardData: [...state.cardData, ...action.data]
      };
    default:
      return state;
  }
}

























// import { ADD_TO_CART } from '../constants';
// const initialState = {
//     cardData: []
// }
// export default function cardItems(state = initialState, action) {
//     switch (action.type) {
//         case ADD_TO_CART:
//             // console.warn("reducer",action)
//             return {
//                 ...state,
//                 cardData: [...state.cardData,action.data]
//     }
//         default:
//             return state;
//     }


// }