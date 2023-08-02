import React from "react";
import {View,StyleSheet} from "react-native";

export const ViewDemo = ()=>{
    return <View style={styles.root}>
        <View style={styles.subView}></View>
    </View>
}

const styles = StyleSheet.create({
    root:{
        flexDirection:'column'
    },
    subView:{
        width:100,
        height:100,
        backgroundColor:'red'
    }
})