import axios from 'axios'
import {
  BLOTTER_LIST_REQUEST,
  BLOTTER_LIST_SUCCESS,
  BLOTTER_LIST_FAIL,
  BLOTTER_DETAILS_REQUEST,
  BLOTTER_DETAILS_SUCCESS,
  BLOTTER_DETAILS_FAIL,
  BLOTTER_DELETE_REQUEST,
  BLOTTER_DELETE_SUCCESS,
  BLOTTER_DELETE_FAIL,
  BLOTTER_CREATE_REQUEST,
  BLOTTER_CREATE_SUCCESS,
  BLOTTER_CREATE_FAIL,
  BLOTTER_UPDATE_REQUEST,
  BLOTTER_UPDATE_SUCCESS,
  BLOTTER_UPDATE_FAIL,
} from '../constants/blotterConstants'

export const listBlotters = () => async (dispatch) => {
  try {
    dispatch({ type: BLOTTER_LIST_REQUEST })

    const { data } = await axios.get('/api/blotters')

    dispatch({
      type: BLOTTER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOTTER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listBlotterDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOTTER_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/blotters/${id}`)

    dispatch({
      type: BLOTTER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOTTER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteBlotter = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOTTER_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/blotters/${id}`, config)

    dispatch({
      type: BLOTTER_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: BLOTTER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createBlotter = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOTTER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/blotters`, {}, config)

    dispatch({
      type: BLOTTER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOTTER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const updateBlotter = (blotter) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOTTER_UPDATE_REQUEST,
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
      `/api/blotters/${blotter._id}`,
      blotter,
      config
    )

    dispatch({
      type: BLOTTER_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOTTER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
