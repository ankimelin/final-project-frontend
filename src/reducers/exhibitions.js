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
    initializeExhibitions: (state, action) => {
      state.allExhibitions = action.payload

      const exhibitions = state.allExhibitions
      const today = new Date(Date.now())

      const filteredExhibitions = exhibitions.filter(exhibition => {
        return (new Date(exhibition.startDate) <= today &&
          new Date(exhibition.endDate) >= today)
      })

      const sortedExhibitions = filteredExhibitions.sort((a, b) => {
        return new Date(b.endDate) - new Date(a.endDate)
      })

      state.displayedExhibitions = sortedExhibitions
    },
    updateExhibitionFilter: (state, action) => {
      state.activeFilter = action.payload

      // console.log(state.allExhibitions)
      // console.log(JSON.stringify(state.allExhibitions))
      // console.log(JSON.parse(JSON.stringify(state.allExhibitions)))

      const filter = action.payload
      const exhibitions = JSON.parse(JSON.stringify(state.allExhibitions)) // why??
      const today = new Date(Date.now())

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