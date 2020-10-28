import React from 'react';
import{View,StyleSheet} from 'react-native';

function Viewer(){
    return(
        <View style={styles.conntainer}>

        </View>
    );
}

const styles=StyleSheet.create({
    conntainer:{
        height: 45,
        width:'100%',
        backgroundColor:'green',
    },
});
export default Viewer;