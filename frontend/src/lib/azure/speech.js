import dotenv from 'dotenv';
dotenv.config();

class SpeechRecognizer{
  constructor(){
    this.speechSDK = require('microsoft-cognitiveservices-speech-sdk');
    this.speechConfig = this.speechSDK.SpeechConfig.fromSubscription(
      process.env.REACT_APP_STT_KEY,
      process.env.REACT_APP_STT_REGION,
    );
    this.speechConfig.speechRecognitionLanguage = 'en-US';
    this.audioConfig = this.speechSDK.AudioConfig.fromDefaultMicrophoneInput();
    this.recognizer = new this.speechSDK.SpeechRecognizer(this.speechConfig, this.audioConfig);
    this.recognizer.recognized = null;
  }

  start(){
    if(this.recognizer.recognized != null){
      this.recognizer.startContinuousRecognitionAsync();
    }
  }

  stop(){
    this.recognizer.stopContinuousRecognitionAsync();
  }

  onSpeech(func){
    this.recognizer.recognized = func;
  }

}

export default SpeechRecognizer;
