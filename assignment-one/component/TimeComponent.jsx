import React, { useEffect, useState } from 'react';

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('Scroll event listener removed');
    };
  }, []);

  return (
    <div>
      <h1>Scroll Position: {scrollPosition}px</h1>
      <div style={{ height: '1500px' }}>
        Scroll to see the scroll position update.
      </div>
    </div>
  );
};

export default ScrollComponent;