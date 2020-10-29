import React,{Component} from 'react';
import {Text,TouchableOpacity,StyleSheet}from 'react-native';
import PropTypes from 'prop-types';
class Button extends Component{ 
    constructor(props){
        super(props);
        console.log('hijo constructor')
    } 
    componentWillMount(){
        console.log('hijo componentWillMount');  
    }
    componentDidMount(){        
        console.log('hijo componentDidMount');
    }
    componentWillReceiveProps(){
        //sirve para manejar props
        //se puede pasar de prop a estado
        console.log('hijo componentWillReceiveProps');
    }
    shouldComponentUpdate(nextProps,nextState){
        //nos ayuda a decidir si ejecutar el render
        console.log({nextProps,nextState});
        console.log('hijo shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){
        //ayuda a resetear valores globales
        console.log('hijo componentWillUpdate');
    }
    componentDidUpdate(prevProps,prevState){
        // se utiliza para configurara librerias
        console.log({prevProps,prevState});
        console.log('hijo componentDidUpdate');
    }
    componentWillUnmount(){
        //se utiliza para resetear estados globales
        console.log('hijo componentWillUnmount');
    }
    render(){
        const {label,action}=this.props;
        console.log('hijo render')
        return(
            <TouchableOpacity style={styles.btn} onPress={action}>
                <Text style={styles.btntext}>{label}</Text>
            </TouchableOpacity>
        );
    }
}
Button.propTypes ={
    label:PropTypes.string.isRequired,
    action:PropTypes.func,
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