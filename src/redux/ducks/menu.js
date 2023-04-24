import { createSlice } from "@reduxjs/toolkit";

const menuData = createSlice({
  name: "MenuDataInfo",
  initialState: {
    topMenu: {
      mainTopMenu: [
        { path: "/", title: "HOME", status: false },
        { path: "/portfolio", title: "PORTFOLIO", status: false },
        { path: "/our_services", title: "OUR SERVICES", status: false },
        { path: "/about", title: "ABOUT US", status: false },
        { path: "/contact_us", title: "CONTACT US", status: false },
      ],
    },
  },
  reducers: {
    updateMenu: (state, action) => {
      state.topMenu.mainTopMenu = action.payload;
      // action.payload;
    },
  },
});

export const { updateMenu } = menuData.actions;
export default menuData.reducer;
