import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen
        ? (state.isModalOpen = false)
        : (state.isModalOpen = true);
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
