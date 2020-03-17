import React, { Component } from 'react'
import {  Text,View, KeyboardAvoidingView,ScrollView,BackHandler,Alert,StatusBar ,ActivityIndicator } from 'react-native'

import commonMethod from '../Lib/commonMethod';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import HomeAction from "../Redux/HomeRedux";
import Cryptocard from '../Components/Cryptocard';
import {Container,Content,Root,Header,Toast,SplashScreen,Body,Title,Fonts,scale} from '../common'

// Styles
import commonScreen from './Styles/commonScreenStyle'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching:false,
      refreshing:false, 
      setRefreshing:false,
      start:1,
      data:[]
    }
  }
    componentDidMount(){
      this.getData();
      SplashScreen.hide();
    }

    getData=()=>{
      this.setState({fetching : true})
      this.props.getHome({start:this.state.start,limit :10})
  }
  onRefresh=()=>{
    this.setState({fetching : true,start:1,data:[]})
    this.props.getHome({start:this.state.start,limit :10})
  }
 
   componentWillReceiveProps(nextProps) {
    if ( !nextProps.home.fetching) {
      this.setState({ fetching:  nextProps.home.fetching ,data :this.state.data.concat(nextProps.home.payload) }) // <- this is setState equivalent
    }
   }
  
  loadMore=()=>{
    console.log("loadmore");
    this.setState({start : this.state.start + 1},()=>{this.getData()})
  }

  render () {
    return (
      <Root>
          <View  style={[(this.state.fetching)? commonScreen.activityIndicator :commonScreen.styleNothing ]}>
            <ActivityIndicator animating={true}  size='large' />
          </View>
          <Container>
            <Header style={[Fonts.style.justifyAlignCenter,{borderBottomWidth:scale(0.5),backgroundColor:"transparent",elevation:0}]}>
            <Body style={[Fonts.style.justifyAlignCenter,{flex:1,justifyContent:"center",alignItems:"center"}]}>
               <Title style={[{color:"#000"}]}>Crypto Currency Data</Title>
            </Body>
            </Header>
              <Content 
                style={{flex:1}}
                contentContainerStyle={{flex: 1}}
              >
                  <View style={{flex:1}}>
                  <Cryptocard 
                    loadMore={this.loadMore} 
                    onRefresh={this.onRefresh}
                    fetching={this.state.fetching}
                    refreshing={this.state.refreshing} 
                    getData= {this.getData} 
                    CryptocardData={this.state.data}/>
                  </View>
              </Content>
          </Container>
      </Root>
    )
  }
}

const mapStateToProps = state => {
   return {
    cryptoCard :state.homeData.payload,
    home : state.homeData
   };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    getHome: (data) => dispatch(HomeAction.homeRequest(data)),
   };
 };


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

