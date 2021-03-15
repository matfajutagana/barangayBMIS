import {
  BLOTTER_LIST_REQUEST,
  BLOTTER_LIST_SUCCESS,
  BLOTTER_LIST_FAIL,
  BLOTTER_DETAILS_REQUEST,
  BLOTTER_DETAILS_SUCCESS,
  BLOTTER_DETAILS_FAIL,
  BLOTTER_CREATE_REQUEST,
  BLOTTER_CREATE_SUCCESS,
  BLOTTER_CREATE_FAIL,
  BLOTTER_CREATE_RESET,
  BLOTTER_DELETE_REQUEST,
  BLOTTER_DELETE_SUCCESS,
  BLOTTER_DELETE_FAIL,
  BLOTTER_UPDATE_REQUEST,
  BLOTTER_UPDATE_SUCCESS,
  BLOTTER_UPDATE_FAIL,
  BLOTTER_UPDATE_RESET,
} from '../constants/blotterConstants'

export const blotterListReducer = (state = { blotters: [] }, action) => {
  switch (action.type) {
    case BLOTTER_LIST_REQUEST:
      return { loading: true, blotters: [] }
    case BLOTTER_LIST_SUCCESS:
      return { loading: false, blotters: action.payload }
    case BLOTTER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const blotterDetailsReducer = (
  state = { blotter: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case BLOTTER_DETAILS_REQUEST:
      return { loading: true, ...state }
    case BLOTTER_DETAILS_SUCCESS:
      return { loading: false, blotter: action.payload }
    case BLOTTER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const blotterDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOTTER_DELETE_REQUEST:
      return { loading: true }
    case BLOTTER_DELETE_SUCCESS:
      return { loading: false, success: true }
    case BLOTTER_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const blotterCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOTTER_CREATE_REQUEST:
      return { loading: true }
    case BLOTTER_CREATE_SUCCESS:
      return { loading: false, success: true, blotter: action.payload }
    case BLOTTER_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case BLOTTER_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const blotterUpdateReducer = (state = { blotter: {} }, action) => {
  switch (action.type) {
    case BLOTTER_UPDATE_REQUEST:
      return { loading: true }
    case BLOTTER_UPDATE_SUCCESS:
      return { loading: false, success: true, blotter: action.payload }
    case BLOTTER_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case BLOTTER_UPDATE_RESET:
      return { blotter: {} }
    default:
      return state
  }
}
