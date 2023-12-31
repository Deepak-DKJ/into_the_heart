import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [selectedResolution, setSelectedResolution] = useState(null);

  const handleResolutionChange = (resolution) => {
    setSelectedResolution(resolution);
  };

  const getImageSource = () => {
    switch (selectedResolution) {
      case '144p':
        return 'Images/a.png';
      case '360p':
        return 'Images/b.png';
      case '720p':
        return 'Images/c.png';
      case '1080p':
        return 'Images/gg.gif';
      default:
        return null;
    }
  };

  const getImageStyle = () => {
    switch (selectedResolution) {
      case '144p':
        return { width: '330px', height: '330px' };
      case '360p':
        return { width: '330px', height: '330px' };
      case '1080p':
        return { width: '550px', height: '550px' };
      default:
        return null;
    }
  };

  // Audio state and effect for playing on 1080p resolution
  const [audio] = useState(new Audio('Sound/aud.mp3')); // Replace with the actual path to your audio file

  useEffect(() => {
    if (selectedResolution === '1080p') {
      audio.loop = true;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [selectedResolution, audio]);

  return (
    <div className="App">
      <div className='mx-2 my-3'>

        <div className="btn-group">
          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            SELECT
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#" onClick={() => handleResolutionChange('144p')}>144p</a>
            <a className="dropdown-item" href="#" onClick={() => handleResolutionChange('360p')}>360p</a>
            <a className="dropdown-item" href="#" onClick={() => handleResolutionChange('720p')}>720p</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" onClick={() => handleResolutionChange('1080p')}>1080p</a>
          </div>
        </div>

      </div>

      <div className='mx-2 my-4'>
        {selectedResolution && <img src={getImageSource()} alt={`Image for ${selectedResolution}`} style={getImageStyle()} />}
      </div>
    </div>
  );
}

export default App;
