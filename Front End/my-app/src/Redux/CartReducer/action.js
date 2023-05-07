import axios from "axios";

export const fourdata = [
  {
    title: "Contour TS Blood Glucose",
    desc: "Contour TS Blood Glucose Test Strip can be used with the Bayer Contour plus blood glucose monitoring system for the quantitative measurement of glucose (sugar) in fresh capillary blood samples drawn from the fingertips.",
    price: 1164,
    discountprice: 10,
    rating: 4.4,
    images:
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/duj5lyzyhhiqbaperf7h.jpg",
    id: 1,
    category: "test-strip",
    brand: "BeatO Curv",
  },
  {
    title: "Accu-Chek Softclix Lancets",
    desc: "Accu-Chek Softclix Lancets is a small, sharp object used to prick the skin to help test blood glucose levels using blood glucose monitors and test strips. ",
    price: 542,
    discountprice: 10,
    rating: 4.5,
    images:
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/gbcnhz6mgcn8xg7mknho.jpg",
    id: 2,
    category: "test-strip",
    brand: "Microlet",
  },
  {
    title: "Accu-Chek Active Test Strip ",
    desc: "It helps in determining the blood sugar level in the body.",
    price: 968,
    discountprice: 10,
    rating: 4.3,
    images:
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/e6c28fd45d4f499dbbe755cf4b77d4e1.jpg",
    id: 3,
    category: "test-strip",
    brand: "SD Biosensor",
  },
  {
    title: "Contour Plus Blood Glucose Test Strip",
    desc: "Contour Plus Blood Glucose Test Strip can be used with the Contour Plus or Contour Plus One Blood Glucose monitoring system for the quantitative measurement of glucose in blood samples.",
    price: 891,
    discountprice: 10,
    rating: 4.5,
    images:
      "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/xf6ogn1ygwsa8jgbcfaq.jpg",
    id: 4,
    category: "test-strip",
    brand: "OneTouch",
  },
];

//this for carosoul
export let getdataAxios = async () => {
  let res = await axios.get(
    `https://good-pear-cheetah-tutu.cyclic.app/teststrip`
  );
  let data = await axios.get(
    `https://good-pear-cheetah-tutu.cyclic.app/vitamin`
  );
  let temp = [];
  res.data.forEach((element) => {
    temp.push(element);
  });
  data.data.forEach((element) => {
    temp.push(element);
  });
  return temp;
};
//total amount
export let gettotalAMT = (data, dispatch) => {
  let sum = 0;
  data.forEach((el) => {
    sum += el.price * el.quantity;
  });
  localStorage.setItem("total", JSON.stringify(sum));
  dispatch({ type: "TOTAL_SUM", payload: sum });
};

//get cart Data

export let getCartData = async (dispatch) => {
  let token = localStorage.getItem("Token");
  dispatch({ type: "REQUEST_ACCESS_DATA" });
  await axios
    .get("https://dizzy-yak-sunglasses.cyclic.app/cartproduct", {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: "GET_INITIAL_DATA", payload: res.data });
      dispatch({ type: "REQUEST_SUCESS_DATA" });
      gettotalAMT(res.data, dispatch);
    })
    .catch((err) => {
      console.log(err);
    });
};

export let deleteCartData = (id, dispatch) => {
  let token = localStorage.getItem("Token");
  axios
    .delete(`https://dizzy-yak-sunglasses.cyclic.app/cartproduct/${id}`, {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${token}`,
      },
    })
    .then((res) => {
      getCartData(dispatch);
    })
    .catch((err) => {
      console.log(err);
    });
};

export let updateCartData = async (id, quan, dispatch) => {
  let token = localStorage.getItem("Token");
  let obj = {
    quantity: quan,
  };
  let res = await axios
    .patch(`https://dizzy-yak-sunglasses.cyclic.app/cartproduct/${id}`, obj, {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${token}`,
      },
    })
    .then((res) => {
      getCartData(dispatch);
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return res;
};

//saveLater
export let saveLater = async (el, dispatch) => {
  let arr = JSON.parse(localStorage.getItem("savelaterData")) || [];
  arr.push(el);
  localStorage.setItem("savelaterData", JSON.stringify(arr));
  dispatch({ type: "SAVE_LATER", payload: el });
  await deleteCartData(el._id, dispatch);
};

//move to cart from save later
export let moveTocart = (el, id, dispatch) => {
  let arr = JSON.parse(localStorage.getItem("savelaterData")) || [];
  let data = arr.filter((el) => {
    if (el._id != id) {
      return el;
    }
  });
  localStorage.setItem("savelaterData", JSON.stringify(data));
  let newData = JSON.parse(localStorage.getItem("savelaterData"));
  dispatch({ type: "NEW_SAVE_DATA", payload: newData });
};

// single product actions
export let getSingleProductAction = async (id, category) => {
  let res = await axios.get(
    `https://good-pear-cheetah-tutu.cyclic.app/${category}/${id}`
  );
  return res.data;
};

export let handleAddAction = (data, quan, dispatch) => {
  let token = localStorage.getItem("Token");
  delete data.id;
  data.quantity = quan;
  let arr = data.images;
  let str = "";
  str = arr[0];
  data.images = str;
  axios
    .post("https://dizzy-yak-sunglasses.cyclic.app/cartproduct", data, {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${token}`,
      },
    })
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      // console.log(err);
    });
};

export let handleAddActionfour = (data, quan, dispatch) => {
  let token = localStorage.getItem("Token");
  delete data.id;
  data.quantity = quan;
  axios
    .post("https://dizzy-yak-sunglasses.cyclic.app/cartproduct", data, {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${token}`,
      },
    })
    .then((res) => {
      getCartData(dispatch);
    })
    .catch((err) => {
      console.log(err);
    });
};
