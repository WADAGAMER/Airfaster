/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component,PureComponent} from 'react';
import { StyleSheet, View,TouchableOpacity,Text} from 'react-native';
import CustomButton from './components/view/button';



class App extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      counter:0,
      flag:false,
    };
    console.log('constructor');
    this.HandleUp= this.HandleUp.bind(this);
    this.HandleDown= this.HandleDown.bind(this);
    this.HandleReset= this.HandleReset.bind(this);
    //this.HandleDelete= this.HandleDelete.bind(this);
  }
  componentWillMount(){
    console.log('componentWillMount');  
  }
  componentDidMount(){
    //sirve para hacer peticiones asincronas
    //puede afectar el performance vuelve a correr el render
    console.log('componentDidMount');
  }
  /*
  shouldComponentUpdate(nextProps,nextState){
    const {counter} =this.state;
    if(nextState.counter===counter) return false;
    return true;
  }
  */
  HandleUp(){
    const {counter:ct}= this.state;
    this.setState({counter:ct+1});
  }
  HandleDown(){
    const {counter:ct}= this.state;
    this.setState({counter:ct-1});
  }
  HandleReset(){   
    this.setState({counter:0});
  }
  /*
  HandleDelete(){    
    this.setState({flag:true});
  }
  */
  render(){
   const{counter}=this.state; 
   console.log('render');
   //if(flag) return null;
   return(
     <View style={styles.container}>
      <View style={styles.subcontainer}>
        <CustomButton label="-" action={this.HandleDown}/>
        <View style={styles.contador}>
          <Text style={styles.contadortxt}>{counter}</Text>
        </View>
        <CustomButton label="+" action={this.HandleUp}/>
      </View>
      <View style={styles.subcontainerreset}>
        <TouchableOpacity style={styles.btnr} onPress={this.HandleReset}>
            <Text style={styles.btntext}>RESET</Text>
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
  subcontainerreset:{
    height:50,
    width:'100%',
    paddingHorizontal:10,
    flexDirection:'row',
    justifyContent:'center', 
    alignItems:'center',
    marginTop:20,   
  },  
  btn:{
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
  },
  btnr:{
    height:50,
    width:'80%',
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
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
