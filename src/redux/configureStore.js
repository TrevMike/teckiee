import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import employeeInfoReducer from "./ducks/employeeInfo";
import menuInfoReducer from "./ducks/menu";

const store = configureStore({
  reducer: {
    employeeState: employeeInfoReducer,
    menu: menuInfoReducer,
  },
});

export default store;
