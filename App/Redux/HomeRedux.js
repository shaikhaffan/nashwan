import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  homeRequest: ['data'],
  homeSuccess: ['payload'],
  homeFailure: null,
  
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  
})

/* ------------- Selectors ------------- */

export const HomeSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  
  state.merge({ fetching: true, data, payload: state.payload })


// successful api lookup
export const success = (state, action) => {
 // console.log(action,"success-action");
  const { payload } = action
 // console.log(state,"state")
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })


  // request the data from an api

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOME_REQUEST]: request,
  [Types.HOME_SUCCESS]: success,
  [Types.HOME_FAILURE]: failure,
 
})
