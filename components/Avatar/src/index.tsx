import React from 'react';
import styles from './Avatar.css';

interface Props {
  initials?: string;
  name?: string;
  size?: number;
  src?: string;
}

function getInitials(name: string) {
  const words = name.split(' ');
  const initials = words.map((word: string) => word[0]);
  return initials
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export const Avatar = ({ initials, name = '', size = 40, src }: Props) => {
  const imageRef = React.useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const _size = {
    width: `${size}px`,
    height: `${size}px`
  };

  function handleLoad() {
    setImageLoaded(true);
  }

  function handleError() {
    setImageLoaded(false);
  }

  React.useEffect(() => {
    setImageLoaded(false);
    console.log('image start loading.');
    if (imageRef.current) {
      console.log('ref has el.');
      if (typeof src === 'string') {
        imageRef.current.src = src;
        imageRef.current.onload = handleLoad;
        imageRef.current.onerror = handleError;
      }
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.onload = null;
        imageRef.current.onerror = null;
      }
    };
  }, [src]);

  return (
    <div style={_size} className={styles.root}>
      {src && <img ref={imageRef} alt={name} style={_size} />}
      {!imageLoaded && (
        <div className={styles.initials}>{initials || getInitials(name)}</div>
      )}
    </div>
  );
};
Avatar.displayName = 'Avatar';
