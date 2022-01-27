import { userConstant } from "../_constants";
import { history } from "../_helpers";
import { userService } from "../_services";
import { alertActions } from "./alert.action";

export const adminActions = {
  login,
};

//login funciton

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request(user) {
    return { type: userConstant.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstant.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstant.LOGIN_FAILURE, error };
  }
}
