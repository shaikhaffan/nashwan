import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { RefreshControl,View, Text ,FlatList,Image,ActivityIndicator} from 'react-native'
import styles from './Styles/CryptocardStyle'
import {Card,FastImage,scale,Icon,Colors,Fonts,moment} from '../common'


export default class Cryptocard extends Component {

  constructor(props) {
    super(props);
  }


  renderFooter = () =>{
    console.log(this.props.fetching,"renderfooter");
   return(
    (this.props.fetching == true) ?
     <View style={styles.renderFooterStyle}><Text>Loading...</Text></View>
    :<View  style={styles.renderFooterStyle}><Text></Text></View>
   )
  }

  _renderItem = ({item,index}) => {
      return(
          <Card style={[Fonts.style.justifyAlignCenter,{paddingVertical:scale(20)}]}>
             <View style={[{width:"95%"}]}>
               <View  style={[styles.direction,]}>
               <View>
                <FastImage resizeMode={'contain'} 
                style={{width:scale(20),height:scale(20)}} 
                source={require('../Images/launch-con3.png')}/>
               </View>
               <View style={[{flex:1}]}>
                 <View style={[styles.direction]}>
                    <View style={styles.firstTabMargin}><Text style={{fontWeight:"bold"}}>{item.symbol}</Text></View>
                    <View style={styles.firstTabMargin}><Text>|</Text></View>
                    <View style={styles.firstTabMargin}><Text>{item.name}</Text></View>
                 </View>
               </View>
               <View>
                 <Text style={{fontWeight:"bold"}}>
                   {`${item.quote.USD.price.toFixed(2)} $`}
                 </Text>
               </View>
               </View>
             </View>
              <View
               style={[Fonts.style.justifyAlignCenter,Fonts.style.flex1,styles.borderStyle]}>
                <View style={[Fonts.style.directionRow,{justifyContent:"space-between",marginTop:scale(15),width:"95%"}]}>
                  <View style={{flexDirection:"row"}}>
                   <View><Text>{`24h: `}</Text></View>
                    <View><Text style={{fontWeight:"bold",color:Colors.laleRed}}>{`${item.quote.USD.percent_change_24h.toFixed(2)}`}</Text></View>
                  </View>
                  <View style={[Fonts.style.directionRow,{}]}>
                   <View><Text>{`7d: `}</Text></View>
                    <View><Text style={{fontWeight:"bold",color:Colors.laleRed}}>
                      {`${item.quote.USD.percent_change_7d.toFixed(2)}`}</Text></View>
                  </View>
                </View>
               </View>

               <View
               style={[Fonts.style.justifyAlignCenter,Fonts.style.flex1,styles.borderStyle]}>
                <View style={[{flexDirection:"row",justifyContent:"space-between",marginTop:scale(15),width:"95%"}]}>
                  <View style={{flexDirection:"row"}}>
                   <View><Text>{`Last Updated: `}</Text></View>
                    <View><Text style={{fontWeight:"bold",color:Colors.laleRed}}>{`${moment(item.last_updated).format('MMMM Do, YYYY')}`}</Text></View>
                  </View>
                </View>
               </View>
          </Card>
          )
        
     }

    

  render () {
    return (
      <View style={{width:'100%',justifyContent:"center",flex:1}}>
         <FlatList
         refreshControl={
          <RefreshControl refreshing={this.props.refreshing} onRefresh={()=>{this.props.onRefresh()}} />
        }
          horizontal={false}
          showsVerticalScrollIndicator={false}
          disableVirtualization={true}
          data={this.props.CryptocardData}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `${index}`}
           ListEmptyComponent={()=>{return(
          <View style={[Fonts.style.justifyAlignCenter,{width:'100%',}]}>
          </View>)}}
           onEndReachedThreshold={0.1}
           onEndReached={({ distanceFromEnd }) => {
            {
              !this.props.fetching &&
              this.props.loadMore()
            }
          }}
          scrollEventThrottle={400}
          ListFooterComponent={this.renderFooter.bind(this)}
       />
      </View>
    )
  }
}
