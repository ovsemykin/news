let initialState = {
  login: false,
};

export function logging(state = initialState, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        login: true,
      };
    case "LOGGED_OUT":
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
}