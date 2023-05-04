let initial = {
  isError: false,
  isLoading: false,
  cartData: JSON.parse(localStorage.getItem("cartData")) || [],
  total: JSON.parse(localStorage.getItem("total")) || 0,
  savelater: JSON.parse(localStorage.getItem("savelaterData")) || [],
};

export let reducer = (state = initial, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
