import React, { useEffect, useState } from "react"
import ReactModal from 'react-modal';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = function () {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>Open</button>
      <ReactModal
        isOpen={isModalOpen}
      >
        <button onClick={handleClick}>Close</button>
        <p>Modal built using react-modal</p>
      </ReactModal>
    </div>
  );
}
