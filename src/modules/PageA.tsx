import React from "react";
import {Button, Text, View} from "react-native";
//useRoute 获取当前路由信息
import {useRoute,useNavigation} from "@react-navigation/native";
import {NavigationHelpers} from "../route";

export const PageA = ()=>{
  const navigation = useNavigation<NavigationHelpers>();
  const pushFn = ()=>{
    navigation.navigate('ScreenB')
  }
  return <View>
    <Text>页面A</Text>
    <Button title={'跳转到B'} onPress={pushFn}/>
  </View>
}