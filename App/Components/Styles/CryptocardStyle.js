import { StyleSheet } from 'react-native'
import {scale,Colors} from '../../common'
export default StyleSheet.create({
  container: {
    flex: 1
  },
  direction:{
    flexDirection:"row"
  },
  renderFooterStyle:{
    marginTop:scale(10),alignItems:"center",marginBottom:scale(10),
  },
  firstTabMargin : {
    marginLeft:scale(10)
  },
  borderStyle:{
    marginTop:scale(15),width:"100%",borderTopColor:Colors.laleGray,borderTopWidth:scale(0.3)
  }
})
