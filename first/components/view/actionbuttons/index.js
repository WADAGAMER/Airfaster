import React,{Component,Fragment} from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

class ActionButton extends Component{
    render(){
        const{reset,plus}=this.props;
        return(
            <Fragment>
                <TouchableOpacity style={styles.btnr} onPress={reset}>
                    <Text style={styles.btntext}>RESET</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnr} onPress={plus}>
                    <Text style={styles.btntext}>+ 10</Text>
                </TouchableOpacity>
            </Fragment>
        );
    }
}
const styles = StyleSheet.create({
    btnr:{
        height:50,
        width:100,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
    },
    btntext:{
        fontSize:30,
        color:'#7f8c8d',
        fontWeight:'bold',
    },
});
export default ActionButton;