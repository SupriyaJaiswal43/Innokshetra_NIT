// src/components/AudioRecorder.js
import React from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { Button, View } from 'react-native';

const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioRecorder = () => {
  const startRecording = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      console.log('Recording started', result);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      console.log('Recording stopped', result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} />
    </View>
  );
};

export default AudioRecorder;
