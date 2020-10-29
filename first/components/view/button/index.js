import React,{Component} from 'react';
import {Text,TouchableOpacity,StyleSheet}from 'react-native';
class Button extends Component{
    render(){
        const {label,action}=this.props;
        return(
            <TouchableOpacity style={styles.btn} onPress={action}>
                <Text style={styles.btntext}>{label}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
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
  });
export default Button;