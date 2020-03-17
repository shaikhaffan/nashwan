/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import HomeActions from '../Redux/HomeRedux'
//import AsyncStorage from '@react-native-community/async-storage';

export function * getHomeData (api, action) {
  const { data } = action;
  const response = yield call(api.getHome,data);
 //console.log("response--",response.data.data)
  if (response.ok) {
    yield put(HomeActions.homeSuccess(response.data.data))
  } else {
    yield put(HomeActions.homeFailure())
  }
}



