import { createSlice } from "@reduxjs/toolkit";

const modalData = createSlice({
  name: "modalData",
  initialState: {
    contactUsModal: {
      active: false,
    },
  },
  reducers: {
    contactModalHandler: (state) => {
      const toggle = !state.contactUsModal.active;
      state.contactUsModal.active = toggle;
    },
  },
});
export const { contactModalHandler } = modalData.actions;
export default modalData.reducer;
