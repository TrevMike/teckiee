import { configureStore } from "@reduxjs/toolkit";
import employeeInfoReducer from "./ducks/employeeInfo";
import menuInfoReducer from "./ducks/menu";
import modalReducer from "./ducks/modals";

const store = configureStore({
  reducer: {
    employeeState: employeeInfoReducer,
    menu: menuInfoReducer,
    modal: modalReducer,
  },
});

export default store;
