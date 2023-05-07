let initial = {
  isAuth: JSON.parse(localStorage.getItem("Auth")) || false,
};

export let reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "USER_SUCESS_LOGIN": {
      return { ...state, isAuth: true };
    }

    default:
      return state;
  }
};
