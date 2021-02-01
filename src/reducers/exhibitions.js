import { createSlice } from '@reduxjs/toolkit'

export const exhibitions = createSlice({
  name: 'exhibitions',
  initialState: {
    allExhibitions: [],
    filteredAndSortedExhibitions: [],
    activeFilter: 'Ongoing',
    status: true,
    loading: true
  },
  reducers: {
    setAllExhibitions: (state, action) => {
      state.allExhibitions = action.payload
    },
    setFilteredAndSortedExhibitions: (state, action) => {
      state.filteredAndSortedExhibitions = action.payload
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payled
    }
  }
})