import { useState } from 'react';

function LoadImage(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      className={props.className}
      style={{
        height: isLoaded || '14em',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#2b2b2b',
        backgroundImage: `url(${props.src})`
      }}
    >
      <BackgroundImageOnLoad
        src={props.src}
        onLoadBg={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div
          className={`d-flex align-items-center justify-content-center h-100`}
        >
          <div
            className={`spinner-border spinner-border-sm text-white my-1`}
          />
        </div>
      )}
    </div>
  );
}

export default LoadImage;
