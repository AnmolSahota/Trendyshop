let initial = {
  isError: false,
  isLoading: false,
  cartData: [],
  total: JSON.parse(localStorage.getItem("total")) || 0,
  savelater: JSON.parse(localStorage.getItem("savelaterData")) || [],
};

export let reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "GET_INITIAL_DATA": {
      return { ...state, cartData: payload };
    }
    case "REQUEST_ACCESS_DATA": {
      return { ...state, isLoading: true };
    }
    case "REQUEST_SUCESS_DATA": {
      return { ...state, isLoading: false };
    }
    case "TOTAL_SUM": {
      return { ...state, total: payload };
    }
    case "SAVE_LATER": {
      return { ...state, savelater: [...state.savelater, payload] };
    }
    case "NEW_SAVE_DATA": {
      return { ...state, savelater: payload };
    }
    default:
      return state;
  }
};
