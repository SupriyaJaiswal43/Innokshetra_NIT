import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import EmergencyHome from './src/components/EmergencyHome';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EmergencyHome />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
