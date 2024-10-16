import { useSpring } from 'react-spring';

const usePageTransition = () => {
  const transition = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },  // Start off the screen (top)
    to: { opacity: 1, transform: 'translateY(0%)' },       // End at the normal position
    config: { tension: 170, friction: 20 },                // Simulate a softer drop, like sand
  });

  return transition;
};

export default usePageTransition;
