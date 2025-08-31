import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * Custom hook to enable horizontal scrolling by dragging with the mouse.
 *
 * @returns A ref object to be attached to the scrollable element.
 */
const useDragScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Memoize event handlers to avoid re-creating them on every render
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const element = ref.current;
    if (!isDragging || !element) return;
    e.preventDefault();
    const x = e.pageX - element.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Multiplier for faster scroll
    element.scrollLeft = scrollLeft.current - walk;
  }, [isDragging]); // Only re-create if isDragging changes

  const handleMouseUp = useCallback(() => {
    const element = ref.current;
    setIsDragging(false);
    if (element) {
      element.style.cursor = 'grab';
      element.style.userSelect = 'auto';
    }
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]); // Depends on handleMouseMove

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const element = ref.current;
    if (!element) return;

    setIsDragging(true);
    startX.current = e.pageX - element.offsetLeft;
    scrollLeft.current = element.scrollLeft;
    element.style.cursor = 'grabbing';
    element.style.userSelect = 'none';

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousedown', handleMouseDown);
    element.style.cursor = 'grab'; // Set initial cursor style

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      // Ensure global listeners are cleaned up if component unmounts while dragging
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]); // Dependencies for useEffect

  return ref;
};

export default useDragScroll;