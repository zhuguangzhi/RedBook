import React from 'react';
import {StatusBar, StyleSheet,} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import router from "./src/route";


const Stack = createStackNavigator();

const onBeforeRemove = (e: any) => {
  console.log('e',e)
  // 在这里执行路由拦截或认证检查的逻辑
  // 如果需要阻止屏幕的移除，可以调用e.preventDefault()
  // 例如，如果用户未登录，则阻止移除特定屏幕，让用户先登录
};

function App(): JSX.Element {
  return (
      <SafeAreaProvider>
        <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'white'}
        />
        <NavigationContainer>
          {/*elevation: 页面的层级*/}
          <Stack.Navigator initialRouteName={router.default} screenOptions={{cardStyle:{elevation:1}}}>
            {router.routes.map((route) => (
                <Stack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                      headerShown: false, // 可以根据需要配置其他导航选项
                    }}
                    listeners={{
                      beforeRemove: onBeforeRemove,
                    }}
                />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
