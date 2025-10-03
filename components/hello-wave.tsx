import { StyleSheet } from 'react-native';
import { ThemedText } from './themed-text';

export function HelloWave() {
  return (
    <ThemedText
      style={style.text}>
      Hello React
    </ThemedText>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
    alignItems: 'center',
  }
})
