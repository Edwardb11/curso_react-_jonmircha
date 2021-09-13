import {combineReducers} from 'redux'
import contador from './CounterReducer'
import users from './UserReducer'

export default combineReducers({
    contador,
    users
})