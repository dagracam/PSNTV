import React from 'react';
import { cn } from '@/lib/utils';

const TikTokIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    className={cn("icon-tiktok", props.className)}
    // Il colore sarà controllato da currentColor tramite il colore del testo del genitore
  />
);

export default TikTokIcon;