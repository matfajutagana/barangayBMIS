import axios from 'axios'
import {
  RESIDENT_LIST_REQUEST,
  RESIDENT_LIST_SUCCESS,
  RESIDENT_LIST_FAIL,
  RESIDENT_DETAILS_REQUEST,
  RESIDENT_DETAILS_SUCCESS,
  RESIDENT_DETAILS_FAIL,
  RESIDENT_DELETE_REQUEST,
  RESIDENT_DELETE_SUCCESS,
  RESIDENT_DELETE_FAIL,
  RESIDENT_CREATE_REQUEST,
  RESIDENT_CREATE_SUCCESS,
  RESIDENT_CREATE_FAIL,
  RESIDENT_UPDATE_REQUEST,
  RESIDENT_UPDATE_SUCCESS,
  RESIDENT_UPDATE_FAIL,
} from '../constants/residentConstants'

export const listResidents = () => async (dispatch) => {
  try {
    dispatch({ type: RESIDENT_LIST_REQUEST })

    const { data } = await axios.get('/api/residents')

    dispatch({
      type: RESIDENT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RESIDENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listResidentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: RESIDENT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/residents/${id}`)

    dispatch({
      type: RESIDENT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RESIDENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteResident = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESIDENT_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/residents/${id}`, config)

    dispatch({
      type: RESIDENT_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: RESIDENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createResident = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESIDENT_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/residents`, {}, config)

    dispatch({
      type: RESIDENT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RESIDENT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const updateResident = (resident) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESIDENT_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/residents/${resident._id}`,
      resident,
      config
    )

    dispatch({
      type: RESIDENT_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RESIDENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
