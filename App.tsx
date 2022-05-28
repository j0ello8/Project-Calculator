import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { Switch } from 'react-native';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import MyKeyboard from './src/components/myKeyBoard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor:'#FFFF'}]}>
      <StatusBar style="auto" />
      <MyKeyboard />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light, 
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
