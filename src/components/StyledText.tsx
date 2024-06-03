import { Text, TextProps } from './Themed';
import React, { useEffect } from 'react';
import * as Font from 'expo-font';

export function MonoText(props: TextProps) {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
      });
    }
    loadFonts();
  }, []);
  
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}