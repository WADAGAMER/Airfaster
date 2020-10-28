/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import { StyleSheet, View} from 'react-native';




class App extends Component {
 render(){
   return(
     <View style={styles.container}>
      <View style={styles.subcontainer} />
     </View>
   )
 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'black',
  },
  subcontainer:{
    height:300,
    width:40,
    backgroundColor:'red',
  },   
});

export default App;
