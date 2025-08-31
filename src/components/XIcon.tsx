import React from 'react';

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <img
    src="/x-icon.png"
    alt="X Icon"
    className={props.className} // Passa le classi Tailwind per dimensioni e colore
    style={{ filter: props.color ? `invert(1) sepia(1) saturate(5) hue-rotate(175deg) brightness(0.8) contrast(2) opacity(0.8)` : undefined }} // Un filtro di esempio se volessi cambiare colore, ma di solito si usa text-color su className
  />
);

export default XIcon;