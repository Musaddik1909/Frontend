import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [response, setResponse] = useState(null);

  return (
    <div className="App">
      <h1>Process JSON Data</h1>
      <InputForm onSuccess={setResponse} />
      {response && <ResponseDisplay response={response} />}
    </div>
  );
}

export default App;
