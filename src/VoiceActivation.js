import { SpeechClient } from '@google-cloud/speech';

const client = new SpeechClient();

export const startListening = (onActivation) => {
  const request = {
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    },
    interimResults: false,
  };

  const recognizeStream = client
    .streamingRecognize(request)
    .on('error', console.error)
    .on('data', (data) => {
      const transcript = data.results[0].alternatives[0].transcript;
      if (transcript.toLowerCase().includes('activate emergency')) {
        onActivation();
      }
    });

  // You'll need to implement a way to stream audio from the device's microphone
  // This will depend on your specific React Native setup

  return recognizeStream;
};