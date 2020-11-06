import React, { useEffect, useState } from "react"
import ReactModal from 'react-modal';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = function () {
    setModalOpen(!isModalOpen);
  };

  const style = {
    overlay: {
      backgroundColor: 'red',
      opacity: '0.5',
    },
  };

  return (
    <div>
      <button onClick={handleClick}>Open</button>
      <ReactModal
        isOpen={isModalOpen}
        style={style}
      >
        <button onClick={handleClick}>Close</button>
        <p>Modal built using react-modal</p>
      </ReactModal>
    </div>
  );
}
