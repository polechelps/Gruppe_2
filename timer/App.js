import { StyleSheet, View } from 'react-native';
import StopWatch from './src/stoppeklokke';

export default function App() {
  return (
    <View style={styles.container}>
      <StopWatch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
