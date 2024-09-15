import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import getMockData from '../services/mockService';
import AudioRecorder from './AudioRecorder';
import SafetyTracking from './SafetyTracking';
import AccidentDetection from './AccidentDetection';

const EmergencyModal = ({ visible, onClose, emergencyType }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (visible) {
      getMockData(emergencyType.toLowerCase()).then(setData).catch(console.error);
    }
  }, [visible, emergencyType]);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{emergencyType} Emergency</Text>
        {data ? (
          <>
            {emergencyType === 'Medical' && (
              <View>
                <Text>Symptoms: {data.symptoms}</Text>
                <Text>Home Remedies:</Text>
                {data.suggested_home_remedies.map((remedy, index) => (
                  <Text key={index}>- {remedy}</Text>
                ))}
                <Text>Nearby Hospital: {data.hospital_nearby}</Text>
              </View>
            )}
            {emergencyType === 'Fire' && (
              <View>
                <Text>Fire Type: {data.fire_type}</Text>
                <Text>Advice: {data.advice}</Text>
                <Text>Emergency Number: {data.emergency_number}</Text>
              </View>
            )}
            {emergencyType === 'Safety' && <SafetyTracking />}
            {emergencyType === 'Accident' && <AccidentDetection />}
          </>
        ) : (
          <Text>Loading...</Text>
        )}
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
});

export default EmergencyModal;
