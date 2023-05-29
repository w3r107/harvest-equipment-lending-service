import { message } from "antd";
import axios from "axios";
import { DataSessionInstance } from "twilio/lib/rest/wireless/v1/sim/dataSession";

export const getAllCars = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get("/api/cars/getallcars");
    dispatch({ type: "GET_ALL_CARS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    // console.log(reqObj);
    const data = new FormData();
    data.set("name", reqObj.name);
    data.set("nameOfDriver", reqObj.name);
    data.set("name", reqObj.name);
    data.set("phoneNo", reqObj.phoneNo);
    data.set("nameOfShop", reqObj.nameOfShop);
    data.set("phoneNoShop", reqObj.phoneNoShop);
    data.set("address", reqObj.address);
    data.set("city", reqObj.city);
    data.set("capacity", reqObj.capacity);
    data.set("fuelType", reqObj.fuelType);
    data.set("rentPerHour", reqObj.rentPerHour);
    data.set("image", reqObj.image);
    console.log(reqObj.image);
    const res = await axios.post("/api/cars/addcar", reqObj, {
      "Content-type": "multipart/form-data",
    });
    console.log(res);

    dispatch({ type: "LOADING", payload: false });
    message.success("New car added successfully");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("/api/cars/editcar", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Car details updated successfully");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("/api/cars/deletecar", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Car deleted successfully");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
