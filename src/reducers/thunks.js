import { exhibitions } from './exhibitions'

const EXHIBITIONS_URL = 'https://final-project-curated.herokuapp.com/exhibitions'

export const getExhibitions = (filter) => {
  return (dispatch) => {
    if (filter === 'all') {
      dispatch(exhibitions.actions.setLoadingAllAdmin(true))
    } else {
      dispatch(exhibitions.actions.setLoadingAll(true))
    }
    dispatch(exhibitions.actions.setStatus(true))
    fetch(EXHIBITIONS_URL)
      .then(res => {
        dispatch(exhibitions.actions.setStatus(res.ok))
        return res.json()
      })
      .then(json => {
        const exhibitionList =
          json.map(exhibition => {
            return {
              id: exhibition._id,
              title: exhibition.title,
              artists: exhibition.artists,
              startDate: new Date(exhibition.startDate).setHours(0, 0, 0, 0),
              endDate: new Date(exhibition.endDate).setHours(0, 0, 0, 0),
              museum: exhibition.museum,
              link: exhibition.link,
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
        if (filter === 'all') {
          dispatch(exhibitions.actions.setLoadingAllAdmin(false))
        } else {
          dispatch(exhibitions.actions.setLoadingAll(false))
        }
      })
  }
}

export const getExhibition = (id) => {
  const EXHIBITION_URL = `https://final-project-curated.herokuapp.com/exhibitions/${id}`
  return (dispatch) => {
    dispatch(exhibitions.actions.setLoadingOne(true))
    dispatch(exhibitions.actions.setStatus(true))
    fetch(EXHIBITION_URL)
      .then(res => {
        dispatch(exhibitions.actions.setStatus(res.ok))
        return res.json()
      })
      .then(json => {
        const options = {
          day: 'numeric', month: 'short', year: 'numeric'
        }
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
        dispatch(exhibitions.actions.setLoadingOne(false))
      })
  }
}

export const addExhibition = (title, museum, artists, startDate, endDate, link, image, imageText) => {
  return (dispatch) => {
    dispatch(exhibitions.actions.setStatus(true))
    dispatch(exhibitions.actions.setLoadingOne(true))
    fetch(EXHIBITIONS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, museum, artists, startDate, endDate, link, image, imageText })
    })
      .then(res => {
        dispatch(exhibitions.actions.setStatus(res.ok))
        return res.json()
      })
      .then(json => {
        dispatch(exhibitions.actions.setAddedExhibition(json))
        dispatch(exhibitions.actions.setExhibitionAdded(true))
      })
      .catch(err => {
        console.log(err)
        dispatch(exhibitions.actions.setStatus(false))
      })
      .finally(() => {
        dispatch(exhibitions.actions.setLoadingOne(false))
      })
  }
}

export const deleteExhibition = (id) => {
  const EXHIBITION_URL = `https://final-project-curated.herokuapp.com/exhibitions/${id}`
  return (dispatch) => {
    dispatch(exhibitions.actions.setStatus(true))
    dispatch(exhibitions.actions.setLoadingOne(true))
    fetch(EXHIBITION_URL, {
      method: 'DELETE'
    })
      .then(res => {
        dispatch(exhibitions.actions.setStatus(res.ok))
        return res.json()
      })
      .then(json => {
        dispatch(exhibitions.actions.setExhibitionDeleted(true))
      })
      .catch(err => {
        dispatch(exhibitions.actions.setStatus(false))
      })
      .finally(() => {
        dispatch(exhibitions.actions.setLoadingOne(false))
      })
  }
}