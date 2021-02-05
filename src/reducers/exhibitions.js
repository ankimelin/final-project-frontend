import { createSlice } from '@reduxjs/toolkit'

export const exhibitions = createSlice({
  name: 'exhibitions',
  initialState: {
    allExhibitions: [],
    displayedExhibitions: [],
    detailedExhibition: {},
    activeFilter: 'Ongoing',
    status: true,
    loading: true
  },
  reducers: {
    filterExhibitions: (state, action) => {
      const { exhibitions, filter } = action.payload
      const today = new Date().setHours(0, 0, 0, 0)

      if (state.allExhibitions.length === 0) {
        state.allExhibitions = exhibitions
      } else {
        state.activeFilter = filter
      }

      const filteredExhibitions = exhibitions.filter(exhibition => {
        if (filter === 'Ongoing') {
          return exhibition.startDate <= today &&
            exhibition.endDate >= today
        } else if (filter === 'Future') {
          return exhibition.startDate > today
        } else if (filter === 'Past') {
          return exhibition.endDate < today
        } else return null
      })

      const sortedExhibitions = filteredExhibitions.sort((a, b) => {
        if (filter === 'Ongoing') {
          return a.endDate - b.endDate
        } else if (filter === 'Past') {
          return b.endDate - a.endDate
        } else if (filter === 'Future') {
          return a.startDate - b.startDate
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
      state.loading = action.payload
    }
  }
})