import { configureStore } from "@reduxjs/toolkit";
import employeeInfoReducer from "./ducks/employeeInfo";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      employeeState: employeeInfoReducer,
    },
  });
  return store;
};

export default makeStore;
