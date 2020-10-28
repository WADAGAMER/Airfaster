/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import { StyleSheet, View,TouchableOpacity,Text} from 'react-native';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0,
    };
    this.HandleUp= this.HandleUp.bind(this);
    this.HandleDown= this.HandleDown.bind(this);
  }
  HandleUp(){
    const {counter:ct}= this.state;
    this.setState({counter:ct+1})
  }
  HandleDown(){
    const {counter:ct}= this.state;
    this.setState({counter:ct-1})
  }
  render(){
   const{counter}=this.state; 
   return(
     <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btn} onPress={this.HandleDown}>
          <Text style={styles.btntext}>-</Text>
        </TouchableOpacity>
        <View style={styles.contador}>
          <Text style={styles.contadortxt}>{counter}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.HandleUp}>
          <Text style={styles.btntext}>+</Text>
        </TouchableOpacity>
      </View>      
     </View>
   )
 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor:'black',
    justifyContent:'center',
  },
  subcontainer:{
    height:50,
    width:'100%',
    paddingHorizontal:10,
    flexDirection:'row',    
  }, 
  btn:{
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
  },
  btntext:{
    fontSize:35,
    color:'#7f8c8d',
    fontWeight:'bold',
  },
  contador:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  contadortxt:{
    fontSize:60,
    color:'#fff',
    fontWeight:'bold',

  }  
});

export default App;
