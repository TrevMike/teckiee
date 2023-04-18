import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import employeeInfoReducer from "./ducks/employeeInfo";

const store = configureStore({
  reducer: {
    employeeState: employeeInfoReducer,
  },
});

export default store;
