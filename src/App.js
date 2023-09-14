

import React, { useState, useEffect } from 'react';
import './App.css';
import TextEditor from './components/TextEditor';
import ButtonAbout from './components/about';
import { Button } from 'react-bootstrap';
import {API_SERVER_URL} from './components/Url';

function App() {
  const [keywordsList, setKeywordsList] = useState([]);

  useEffect(() => {
    
    fetch(`${API_SERVER_URL}/keywords`)
      .then((response) => response.json())
      .then((data) => setKeywordsList(data.keywords))
      .catch((error) => console.error('Error fetching keywords:', error));
  }, []); 

  return (
    <div className="App">
      <div className='header-box'>
        <ButtonAbout />
        <h1>COMPILER OFS</h1>
        <Button className="options-button">
          Options
        </Button>   
      </div>
      <TextEditor keywordsList={keywordsList} />
    </div>
  );
  
}

export default App;
