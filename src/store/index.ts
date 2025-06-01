import { configureStore, createSlice } from "@reduxjs/toolkit";
const messagesInitialState: { messages: [{ incomingMessage: boolean; message: string }]; connectionStatus: boolean } = {
  messages: [],
  connectionStatus: false,
};
const messagesSlice = createSlice({
  name: "messages",
  initialState: messagesInitialState,
  reducers: {
    addMessages: (state, action) => {
      state.messages.push(action.payload);
    },
    changeConnectionStatus: (state, action) => {
      state.connectionStatus = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    messages: messagesSlice.reducer,
  },
});

export const messagesAction = messagesSlice.actions;
export default store;
