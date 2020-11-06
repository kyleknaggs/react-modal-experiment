import React, { useState } from "react"
import ReactModal from 'react-modal';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tortor vitae ipsum mattis, at aliquet lectus ornare. Vivamus iaculis semper pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula felis non sagittis pretium. Curabitur dapibus nisl eu elementum lobortis. Nulla tempor mollis ante, et dignissim justo pellentesque nec. Proin at enim ullamcorper, eleifend nunc sed, pulvinar ipsum. Donec nec suscipit ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lobortis, mauris maximus viverra laoreet, tellus justo placerat neque, eget ornare diam est finibus purus. Ut scelerisque interdum pulvinar. Integer id dui vel massa sodales dictum. Suspendisse potenti. Ut finibus accumsan ligula, eget tristique lectus placerat in. Morbi auctor ante ut dui volutpat, quis suscipit sapien consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam iaculis ullamcorper eros a dapibus. Integer id justo aliquet, faucibus mi vitae, fringilla velit. Duis in sem in nulla imperdiet volutpat. Maecenas elit est, vehicula ac leo id, aliquam tincidunt nisi. Vivamus tincidunt, dui nec facilisis congue, quam magna rhoncus tortor, at viverra libero quam sit amet ante. Phasellus aliquam vehicula laoreet. Quisque sem nibh, dictum eu consequat ac, blandit eget orci. Pellentesque ultricies sapien nunc, id aliquam nulla commodo feugiat. Integer sed massa et tellus faucibus sagittis. Nunc nec sem in ante gravida vulputate. Nullam sed scelerisque augue, ut rutrum diam. Suspendisse potenti. Duis non gravida tellus. Phasellus non volutpat odio. Nunc ut ex imperdiet ipsum pharetra sodales vitae a urna. Etiam in leo at tellus posuere imperdiet vestibulum a mi. Praesent hendrerit tristique turpis id efficitur.";
  const pageText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tortor vitae ipsum mattis, at aliquet lectus ornare. Vivamus iaculis semper pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vehicula felis non sagittis pretium. Curabitur dapibus nisl eu elementum lobortis. Nulla tempor mollis ante, et dignissim justo pellentesque nec. Proin at enim ullamcorper, eleifend nunc sed, pulvinar ipsum. Donec nec suscipit ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lobortis, mauris maximus viverra laoreet, tellus justo placerat neque, eget ornare diam est finibus purus. Ut scelerisque interdum pulvinar. Integer id dui vel massa sodales dictum. Suspendisse potenti. Ut finibus accumsan ligula, eget tristique lectus placerat in. Morbi auctor ante ut dui volutpat, quis suscipit sapien consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam iaculis ullamcorper eros a dapibus. Integer id justo aliquet, faucibus mi vitae, fringilla velit. Duis in sem in nulla imperdiet volutpat. Maecenas elit est, vehicula ac leo id, aliquam tincidunt nisi. Vivamus tincidunt, dui nec facilisis congue, quam magna rhoncus tortor, at viverra libero quam sit amet ante. Phasellus aliquam vehicula laoreet. Quisque sem nibh, dictum eu consequat ac, blandit eget orci. Pellentesque ultricies sapien nunc, id aliquam nulla commodo feugiat. Integer sed massa et tellus faucibus sagittis. Nunc nec sem in ante gravida vulputate. Nullam sed scelerisque augue, ut rutrum diam. Suspendisse potenti. Duis non gravida tellus. Phasellus non volutpat odio. Nunc ut ex imperdiet ipsum pharetra sodales vitae a urna. Etiam in leo at tellus posuere imperdiet vestibulum a mi. Praesent hendrerit tristique turpis id efficitur.";

  const handleClick = function () {
    setModalOpen(!isModalOpen);
  };

  // Fix: "App element is not defined" error by binding to div at root level of app
  ReactModal.setAppElement('#___gatsby');

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
        <p>{modalText}</p>
      </ReactModal>
    </div>
  );

  return (
    <div>
      {modal}
      <div>
        <h1>Page title</h1>
        <button onClick={handleClick}>Open</button>
        <p>{pageText}</p>
      </div>
    </div>
  );
}
