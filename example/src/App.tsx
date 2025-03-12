import { ReelView } from 'reel-native';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  const reels = [
    <Text style={styles.reelText}>Reel 1: Hello World</Text>,
    <Text style={styles.reelText}>Reel 2: React Native is awesome!</Text>,
    <Text style={styles.reelText}>Reel 3: Swipe up for more</Text>,
  ];

  return (
    <View>
      <Text style={styles.title}>Result:</Text>
      <ReelView data={reels} />
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
    marginBottom: 10,
  },
  reelText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
});
