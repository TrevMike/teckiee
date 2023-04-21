import { createSlice } from "@reduxjs/toolkit";

const menuData = createSlice({
  name: "MenuDataInfo",
  initialState: {
    topMenu: {
      menuPlacement: {
        home: false,
        portfolio: false,
        ourServices: false,
        aboutUs: false,
        contactUs: false,
      },
      mainTopMenu: [
        { path: "/", title: "HOME" },
        { path: "/portfolio", title: "PORTFOLIO" },
        { path: "/our_services", title: "OUR SERVICES" },
        { path: "/about", title: "ABOUT US" },
        { path: "/contact_us", title: "CONTACT US" },
      ],
    },
  },
  reducers: {
    updateMenu: (state, action) => {
      state.topMenu.menuPlacement = action.payload;
    },
  },
});

export const { updateMenu } = menuData.actions;
export default menuData.reducer;
