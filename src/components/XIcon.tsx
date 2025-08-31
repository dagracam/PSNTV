import React from 'react';
import { cn } from '@/lib/utils'; // Importa la utility cn

const XIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    className={cn("icon-x", props.className)}
    // Il colore sarà controllato da currentColor tramite il colore del testo del genitore
  />
);

export default XIcon;