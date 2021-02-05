import { exhibitions } from './exhibitions'

export const getExhibitions = (filter) => {
  return (dispatch) => {
    dispatch(exhibitions.actions.setStatus(true))
    dispatch(exhibitions.actions.setLoading(true))
    dispatch(exhibitions.actions.setDetailedExhibition(null))
    const EXHIBITIONS_URL = 'https://final-project-curated.herokuapp.com/exhibitions'
    fetch(EXHIBITIONS_URL)
      .then(res => {
        dispatch(exhibitions.actions.setStatus(res.ok))
        return res.json()
      })
      .then(json => {
        const exhibitionList =
          json.map(exhibition => {
            // no need to create a new object in frontend..
            return {
              id: exhibition._id,
              title: exhibition.title,
              artists: exhibition.artists,
              startDate: new Date(exhibition.startDate).setHours(0, 0, 0, 0),
              endDate: new Date(exhibition.endDate).setHours(0, 0, 0, 0),
              museum: exhibition.museum,
              image: exhibition.image,
              imageText: exhibition.imageText
            }
          })
        dispatch(exhibitions.actions.filterExhibitions({ exhibitions: exhibitionList, filter }))
      })
      .catch(err => {
        dispatch(exhibitions.actions.setStatus(false))
      })
      .finally(() => {
        dispatch(exhibitions.actions.setLoading(false))
      })
  }
}

export const getExhibition = (exhibitionId) => {
  return (dispatch) => {
    dispatch(exhibitions.actions.setStatus(true))
    dispatch(exhibitions.actions.setLoading(true))
    const EXHIBITION_URL = `https://final-project-curated.herokuapp.com/exhibitions/${exhibitionId}`
    fetch(EXHIBITION_URL)
      .then(res => {
        dispatch(exhibitions.actions.setStatus(res.ok))
        return res.json()
      })
      .then(json => {
        const options = {
          day: 'numeric', month: 'short', year: 'numeric'
        }
        // no need to create a new object in frontend..
        const exhibitionListed = {
          id: json._id,
          title: json.title,
          artists: json.artists,
          startDate: new Date(json.startDate).toLocaleDateString('en-US', options),
          endDate: new Date(json.endDate).toLocaleDateString('en-US', options),
          museum: json.museum,
          link: json.link,
          image: json.image,
          imageText: json.imageText
        }
        dispatch(exhibitions.actions.setDetailedExhibition(exhibitionListed))
      })
      .catch(err => {
        dispatch(exhibitions.actions.setStatus(false))
      })
      .finally(() => {
        dispatch(exhibitions.actions.setLoading(false))
      })
  }
}