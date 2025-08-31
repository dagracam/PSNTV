import React from 'react';

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <img
    src="/x-icon.png"
    alt="X Icon"
    className={props.className} // Passa le classi Tailwind per dimensioni e colore
    style={{ filter: 'brightness(0) invert(1)' }} // Applica il filtro per rendere l'immagine bianca
  />
);

export default XIcon;