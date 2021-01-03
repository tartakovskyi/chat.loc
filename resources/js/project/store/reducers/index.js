import { combineReducers } from 'redux'
import user from './user'
import message from './message'

export const reducers = combineReducers({
  user,
  message
})