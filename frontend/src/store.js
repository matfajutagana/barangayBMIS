import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  residentListReducer,
  residentDetailsReducer,
  residentCreateReducer,
  residentDeleteReducer,
  residentUpdateReducer,
} from './reducers/residentReducers'
import {
  blotterListReducer,
  blotterDetailsReducer,
  blotterCreateReducer,
  blotterDeleteReducer,
  blotterUpdateReducer,
} from './reducers/blotterReducers'
import {
  imageDetailsReducer,
  imageListReducer,
  imageUpdateReducer,
} from './reducers/imageReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
  residentList: residentListReducer,
  residentDetails: residentDetailsReducer,
  userLogin: userLoginReducer,
  residentCreate: residentCreateReducer,
  residentDelete: residentDeleteReducer,
  residentUpdate: residentUpdateReducer,
  imageList: imageListReducer,
  imageDetails: imageDetailsReducer,
  imageUpdate: imageUpdateReducer,
  blotterList: blotterListReducer,
  blotterDetails: blotterDetailsReducer,
  blotterCreate: blotterCreateReducer,
  blotterDelete: blotterDeleteReducer,
  blotterUpdate: blotterUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
