import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * Custom hook to enable horizontal scrolling by dragging with the mouse.
 *
 * @returns A ref object to be attached to the scrollable element.
 */
const useDragScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false); // State for rendering and conditional logic
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Use a ref to store the latest `isDragging` state for event handlers
  const isDraggingStateRef = useRef(isDragging);
  useEffect(() => {
    isDraggingStateRef.current = isDragging;
  }, [isDragging]);

  // Define stable callback functions
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const element = ref.current;
    // Use the ref for isDragging to avoid re-creating this callback
    if (!isDraggingStateRef.current || !element) return;
    e.preventDefault();
    const x = e.pageX - element.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Multiplier for faster scroll
    element.scrollLeft = scrollLeft.current - walk;
  }, []); // Empty dependency array: this callback is stable

  const handleMouseUp = useCallback(() => {
    const element = ref.current;
    setIsDragging(false); // Update state
    if (element) {
      element.style.cursor = 'grab';
      element.style.userSelect = 'auto';
    }
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]); // Depends on handleMouseMove, which is stable

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const element = ref.current;
    if (!element) return;

    setIsDragging(true); // Update state
    startX.current = e.pageX - element.offsetLeft;
    scrollLeft.current = element.scrollLeft;
    element.style.cursor = 'grabbing';
    element.style.userSelect = 'none';

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove, handleMouseUp]); // Depends on stable handleMouseMove and handleMouseUp

  // This effect runs only once to attach the initial mousedown listener
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousedown', handleMouseDown);
    element.style.cursor = 'grab'; // Set initial cursor style

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      // Ensure global listeners are cleaned up if component unmounts while dragging
      // This is important for cases where the component unmounts mid-drag
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseDown]); // Only depends on handleMouseDown, which is now stable

  return ref;
};

export default useDragScroll;