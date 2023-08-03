import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageSave = async (key:string,value__:unknown)=>{
  try {
    const value = JSON.stringify(value__)
    return await AsyncStorage.setItem(key,value)
  }catch (e) {
    console.error('storage save error: ',e)
  }
}
export const storageLoad = async (key:string)=>{
  try {
    const saveValue = await AsyncStorage.getItem(key)
    return saveValue&&JSON.parse(saveValue)
  }catch (e) {
    console.error('storage load error: ',e)
  }
}
export const storageRemove = async (key:string)=>{
  try {
    return await AsyncStorage.removeItem(key)
  }catch (e) {
    console.error('storage remove error: ',e)
  }
}
export const storageClear = async ()=>{
  try {
    return await AsyncStorage.clear()
  }catch (e) {
    console.error('storage clear error: ',e)
  }
}