// src/config/index.js

import config from 'react-native-config';
import {AsyncStorage} from 'react-native';




 let configs =  {
  api: {
    host: config.API_URL,
    token :config.API_TOKEN,
    timeout: 20000,
    testEndPoint : 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/',
    testToken :"d4719291-4201-45cd-822f-fb8bb7dc1427"
  }

  
};

//console.log(configs.api.adminToken,"admintoken");



const API_HOST = configs.api.host;

export {
  API_HOST
}

export default configs