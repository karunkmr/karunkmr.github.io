import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

function App() {

  const handleVerify = () => {
    alert("verified")
  }

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey="6LfqZsQjAAAAANfK729uhBksJRdmFJAxD47kmEc0">
        <GoogleReCaptcha onVerify={() => handleVerify()} />
      </GoogleReCaptchaProvider>
    </>
  );
}

export default App;
