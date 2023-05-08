import axios from "axios";
import { PRODUCTFAILURE, PRODUCTREQUEST, PRODUCTSUCCESS } from "./actionType";

export const getVitamins = (obj) => (dispatch) => {
  dispatch(PRODUCTREQUEST);
  axios
    .get("https://good-pear-cheetah-tutu.cyclic.app/vitamin", obj)
    .then((res) => {
      dispatch({ type: PRODUCTSUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(PRODUCTFAILURE);
      console.log(err);
    });
};

export const getVitaminsside = (obj) => (dispatch) => {
  dispatch(PRODUCTREQUEST);
//   console.log(obj);
  axios
    .get("https://good-pear-cheetah-tutu.cyclic.app/vitamin", {
      params: obj,
    })
    .then((res) => {
      dispatch({ type: PRODUCTSUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(PRODUCTFAILURE);
      console.log(err);
    });
};
