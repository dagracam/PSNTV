import { useRef, useEffect, useState } from 'react';

/**
 * Custom hook to enable horizontal scrolling by dragging with the mouse.
 *
 * @returns A ref object to be attached to the scrollable element.
 */
const useDragScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - element.offsetLeft);
      setScrollLeft(element.scrollLeft);
      element.style.cursor = 'grabbing';
      element.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      if (element) {
        element.style.cursor = 'grab';
        element.style.userSelect = 'auto';
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (element) {
        element.style.cursor = 'grab';
        element.style.userSelect = 'auto';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 1.5; // Multiplier for faster scroll
      element.scrollLeft = scrollLeft - walk;
    };

    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseup', handleMouseUp);
    element.addEventListener('mousemove', handleMouseMove);

    // Set initial cursor style
    element.style.cursor = 'grab';

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseup', handleMouseUp);
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return ref;
};

export default useDragScroll;