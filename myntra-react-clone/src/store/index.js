import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchSlice from "./fetchStatusSlice";
import bagSlice from "./BagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
