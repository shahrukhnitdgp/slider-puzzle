import clickcount from './clickcountreducer'
import {combineReducers } from 'redux'

const store=combineReducers({
    counter:clickcount
})

export default store