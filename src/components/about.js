
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {API_SERVER_URL} from './Url';


function aboutButton() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  const handleAboutClick = async () => {
    try {
      const response = await fetch(`${API_SERVER_URL}/about`);
      const fetchedData = await response.json();
      setData(fetchedData);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching about info:", error);
    }
  };

  return ( // Modal para el button about
    <div>
      <Button onClick={handleAboutClick}>About</Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Version:</strong> {data.version}</p>
          <p><strong>Description:</strong> {data.description}</p>
          <p><strong>Authors:</strong> {data.authors}</p>
          <p><strong>Date:</strong> {data.date}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default aboutButton;