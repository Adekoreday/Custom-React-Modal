import React,  { useState } from 'react';
import Modal from './modal/modal';
import './App.css';

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div>
         { status && (<Modal closeModal={() => setStatus(false)}> <p>The content of the modal</p></Modal>)}
        <div className="container">
        <h2>This is the page content</h2>
        <button onClick={() => setStatus(true)}>Open Modal</button>
        </div>

    </div>
  );
}

export default App;
