import React from 'react';

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" // Aggiunto width esplicito
    height="24" // Aggiunto height esplicito
    viewBox="0 0 24 24"
    fill="none" // Impostato fill a none sull'SVG
    {...props}
  >
    <path d="M18.244 2.25h.004a1.023 1.023 0 0 1 0 2.047h-.004v.001l-2.969 3.21L19.5 18.25h-2.25L12.56 11.28l-4.703 6.97H5.25l6.86-9.6L3.25 2.25h2.25l4.57 6.41L18.244 2.25Zm-4.414 14.037h2.25l-7.429-10.38H6.025l7.805 10.38Z" fill="currentColor"/> {/* Spostato fill="currentColor" sul path */}
  </svg>
);

export default XIcon;