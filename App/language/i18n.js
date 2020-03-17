import React, { Component } from 'react'
import I18n from 'i18n-js';
import en from './en';
import ar from './ar';
import {I18nManager, AsyncStorage,Platform} from 'react-native';
import RNRestart from "react-native-restart";
import * as RNLocalize from "react-native-localize";
//I18n.locale = "ar";

getLocal= async ()=>{
 return await AsyncStorage.getItem('locale');
};
this.getLocal().then(function(v) {
  console.log(v,"vvvv")
  if(v == false || v == undefined){
    I18n.locale = "en";
  }
  I18n.locale = v;
}, function(e) {
  // not called
});
//console.log(this.getLocal())



I18n.fallbacks = true;
I18n.translations = {
  en,
  ar
};

export default I18n;

export const toggleLocale = async() => {
    
    let lan =  (I18n.locale == "en") ? "ar" : "en"
  
    let rtl = I18n.currentLocale().indexOf('ar') !== 0;
    I18nManager.allowRTL(rtl);
    I18nManager.forceRTL(rtl);

    try {
        await AsyncStorage.setItem('locale', lan);
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }   
    RNRestart.Restart();
           
}
export function strings(name, params = {}) {
    return I18n.t(name, params);
};
export function isRTL(){
    return I18n.currentLocale().indexOf('ar') === 0;
}
//I18n.locale = "ar";

