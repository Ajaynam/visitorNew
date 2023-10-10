// src/redux/pendingEntrySlice.js

import { createSlice } from '@reduxjs/toolkit';

const pendingEntrySlice = createSlice({
  name: 'pendingEntry',
  initialState: [],
  reducers: {
    acceptEntry: (state, action) => {
      const entryId = action.payload;
      return state.map((entry) =>
        entry.id === entryId ? { ...entry, action: 'Accepted' } : entry
      );
    },
    rejectEntry: (state, action) => {
      const entryId = action.payload;
      return state.map((entry) =>
        entry.id === entryId ? { ...entry, action: 'Rejected' } : entry
      );
      
    },
setPendingEntries: (state, action) => {
    // Use this action to set the pending entries in the Redux store
    return action.payload;
},
  },
});

export const { acceptEntry, rejectEntry, setPendingEntries } = pendingEntrySlice.actions;
export default pendingEntrySlice.reducer;
