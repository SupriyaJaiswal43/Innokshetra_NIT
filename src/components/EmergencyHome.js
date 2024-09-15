// src/components/EmergencyHome.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import EmergencyModal from './EmergencyModal';

const EmergencyHome = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState('');

  const handleEmergencyType = (type) => {
    setSelectedType(type);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency App</Text>
      <Button title="Medical" onPress={() => handleEmergencyType('Medical')} />
      <Button title="Fire" onPress={() => handleEmergencyType('Fire')} />
      <Button title="Safety" onPress={() => handleEmergencyType('Safety')} />
      <Button title="Accident" onPress={() => handleEmergencyType('Accident')} />
      <EmergencyModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        emergencyType={selectedType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default EmergencyHome;
