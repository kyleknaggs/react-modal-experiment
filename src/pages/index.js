import React, { useEffect, useState } from "react"
import ReactModal from 'react-modal';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = function () {
    setModalOpen(!isModalOpen);
  };

  const style = {
    overlay: {
      backgroundColor: 'rgb(255, 0, 0, 0.5)', /* red */
    },
    content: {
      backgroundColor: 'rgb(0, 153, 0)', /* green */
    },
  };

  const modal = (
    <div>
      <ReactModal
        isOpen={isModalOpen}
        style={style}
      >
        <button onClick={handleClick}>Close</button>
        <h2>Modal title</h2>
        <p>Modal built using react-modal</p>
      </ReactModal>
    </div>
  );

  return (
    <div>
      {modal}
      <div>
        <h1>Page title</h1>
        <button onClick={handleClick}>Open</button>
        <p>Lorem ipsum</p>
      </div>
    </div>
  );
}
