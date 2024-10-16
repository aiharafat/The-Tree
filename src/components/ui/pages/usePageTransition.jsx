import { useSpring } from 'react-spring';

const usePageTransition = () => {
  const transition = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    config: { duration: 500 },
  });
  return transition;
};

export default usePageTransition;
