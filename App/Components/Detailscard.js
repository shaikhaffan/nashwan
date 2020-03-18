import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/DetailscardStyle'

export default class Detailscard extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={[styles.container,{justifyContent:"center",alignItems:"center"}]}>
        <Text styke={{textAlign:"center"}}>We can display bitcoin detais here</Text>
      </View>
    )
  }
}
