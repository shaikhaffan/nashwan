import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,TouchableWithoutFeedback} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Detailscard from '../Components/Detailscard';
// Styles
import styles from './Styles/DetailsScreenStyle'
import {Container,Content,Root,Header,Toast,SplashScreen,Body,Title,Fonts,scale,Left,Right} from '../common'
class DetailsScreen extends Component {



  onPressNavigateBack=()=>{
    
    const {navigation} = this.props;
    console.log(navigation,"navigation")
    navigation.goBack("")
  }

  render () {

    const {navigation} = this.props;
    return (
      <Root>
         
          <Container>
            <Header style={[Fonts.style.justifyAlignCenter,{borderBottomWidth:scale(0.5),backgroundColor:"transparent",elevation:0}]}>
              <Left style={{flex:1}}>
                <TouchableWithoutFeedback onPress={()=>{this.onPressNavigateBack()}}>
                <Text>Back</Text>
                </TouchableWithoutFeedback>
              </Left>
              <Body style={[Fonts.style.justifyAlignCenter,{flex:1,justifyContent:"center",alignItems:"center"}]}>
                <Title style={[{color:"#000"}]}>{navigation.state.params.title}</Title>
              </Body>
              <Right style={{flex:1}}></Right>
            </Header>
              <Content 
                style={{flex:1}}
                contentContainerStyle={{flex: 1}}
              >
                  <View style={{flex:1}}>
                    <Detailscard/>
                  </View>
              </Content>
          </Container>
      </Root>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)
