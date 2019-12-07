import React,  { useState } from 'react';
import Modal from './modal/modal';

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div>

      <div>This is the page content</div>

        { status && (<Modal closeModal={() => setStatus(false)}> <p>The content of the modal</p></Modal>)}

      <button onClick={() => setStatus(true)}>Open Modal</button>
    </div>
  );
}

export default App;
