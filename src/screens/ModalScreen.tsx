import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ModalScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});