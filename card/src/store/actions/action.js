import axios from "axios";
import * as actionType from "./actionTypes";

export const setData = data => {
  return {
    type: actionType.USER_DETAILS,
    payload: {
      userDetails: data
    }
  };
};

export const getUserData = () => {
  return dispatch => (
    axios
      .get(
        "https://gorest.co.in/public-api/users?_format=json&access-token=zqB9gQgWV3n1USSaQVrhrt2tCvRIveASCBP7"
      )
      
      .then(res => {
        dispatch(setData(res.data.result));
      })
      .catch(err => {
        console.log(err);
      })
  );
};

export const deleteItem = (updatedUserDetails) => {
  return {
    type: actionType.DELETE_ITEM,
    payload: {
      userDetails: updatedUserDetails
    }
  }
  
}

