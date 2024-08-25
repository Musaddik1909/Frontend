import React, { useState } from 'react';

const InputForm = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      setError(null); // Reset error state

      // Parse JSON input
      const parsedData = JSON.parse(jsonInput);

      // Validate parsed data
      if (!parsedData || !Array.isArray(parsedData.data)) {
        throw new Error("Invalid JSON format. Make sure it's an object with a 'data' key containing an array.");
      }

      // Send API request
      const res = await fetch('https://backend-av4qq1dlr-musaddiks-projects.vercel.app/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData), // Ensure the body is stringified
      });

      if (!res.ok) {
        throw new Error(`Server error! Status: ${res.status} - ${res.statusText}`);
      }

      const responseData = await res.json();
      setResponse(responseData);

    } catch (e) {
      console.error("Detailed Error:", e); // Log detailed error to console
      setError(`Failed to fetch data! ${e.message}`);
    }
  };

  return (
    <div>
      <h1>JSON Data Input</h1>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter JSON data here'
        rows="6"
        cols="40"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default InputForm;
