import * as actionType from "../actions/actionTypes";
import { combineReducers } from "redux";

const intialState = {
  userDetails: []
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.USER_DETAILS:
      return { ...state, userDetails: action.payload.userDetails };

    case actionType.DELETE_ITEM:
        return { ...state, userDetails: action.payload.userDetails };
  
    default:
      return state;
  }
};

const reducer = combineReducers({
  user: userReducer
});

export default reducer;