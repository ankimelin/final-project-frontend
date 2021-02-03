import { createSlice } from '@reduxjs/toolkit'

export const exhibitions = createSlice({
  name: 'exhibitions',
  initialState: {
    allExhibitions: [],
    displayedExhibitions: [],
    activeFilter: 'Ongoing',
    status: true,
    loading: true
  },
  reducers: {
    filterExhibitions: (state, action) => {
      const { exhibitions, filter } = action.payload
      const today = new Date(Date.now())

      if (state.allExhibitions.length === 0) {
        state.allExhibitions = exhibitions
      } else {
        state.activeFilter = filter
      }

      // match the below on yymmdd and not mmss prob
      const filteredExhibitions = exhibitions.filter(exhibition => {
        if (filter === 'Ongoing') {
          return (new Date(exhibition.startDate) <= today &&
            new Date(exhibition.endDate) >= today)
        } else if (filter === 'Future') {
          return (new Date(exhibition.startDate) > today)
        } else if (filter === 'Past') {
          return (new Date(exhibition.endDate) < today)
        } else return null
      })

      const sortedExhibitions = filteredExhibitions.sort((a, b) => {
        if (filter === 'Ongoing' || 'Past') {
          return new Date(b.endDate) - new Date(a.endDate)
        } else if (filter === 'Future') {
          return new Date(a.startDate) - new Date(b.startDate)
        } else return null
      })

      state.displayedExhibitions = sortedExhibitions
    },
    setDetailedExhibition: (state, action) => {
      state.detailedExhibition = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payled
    }
  }
})