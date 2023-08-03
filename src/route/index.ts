import type {StackNavigationOptions, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React from "react";
import {PageA} from "../modules/PageA";
import {PageB} from "../modules/PageB";

// 定义堆栈导航器的参数类型
export type RootStackParamListProp = {
  ScreenA?: { name: string; age: number }; // 屏幕A 路由接受name和age属性
  ScreenB?: { id: string; data: any };    // 屏幕B路由接受id和data属性
  ScreenC?: object;
};
// 导航帮助函数类型
export type NavigationHelpers = StackNavigationProp<RootStackParamListProp>;

type ScreenComponent<T extends keyof RootStackParamListProp> = React.ComponentType<StackScreenProps<RootStackParamListProp, T>>;
type RouteItem<T extends keyof RootStackParamListProp> = {
  name: T;
  component: ScreenComponent<T>;
  option?:StackNavigationOptions;
};

const routes: RouteItem<keyof RootStackParamListProp>[] = [
  {
    name: 'ScreenA',
    component: PageA, // 假设ScreenA是屏幕组件
  },
  {
    name: 'ScreenB',
    component: PageB, // 假设ScreenB是屏幕组件
    option:{
      headerShown:false
    }
  }
  // 添加其他页面的路由项
];
const router = {
  default:'ScreenA',
  routes
}

export default router;