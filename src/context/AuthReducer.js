const AuthReducer = (state, action) => {
  switch (action.type) {
      case "UPDATE_USER":
        return {
          ...state,
          user: action.payload, // Reçoit directement updatedUser
        };
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
      case "LOGOUT":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
    default:
      return state;
  }
};

export default AuthReducer;
