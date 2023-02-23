import { StyleSheet, Text, View } from 'react-native';

import { getPath } from 'expo-appgroup-path';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{getPath('group.app.avocation.avocation')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
