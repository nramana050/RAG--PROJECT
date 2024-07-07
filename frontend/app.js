import React, { useState } from 'react';

function App() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleRetrieve = async () => {
        const res = await fetch('/retrieve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        });
        const data = await res.json();
        setResponse(data.document);
    };

    const handleGenerate = async () => {
        const res = await fetch('/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        });
        const data = await res.json();
        setResponse(data.response);
    };

    return (
        <div className="App">
            <h1>Chat with Document</h1>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleRetrieve}>Retrieve</button>
            <button onClick={handleGenerate}>Generate</button>
            <p>{response}</p>
        </div>
    );
}

export default App;
