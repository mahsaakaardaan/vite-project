import { useCallback, useEffect, useState } from 'react';

export function useIsScrollEnd(ref:any) {
  const [isScrollComplete, setIsScrollComplete] = useState(false);

  const onScroll: EventListener = useCallback(({ currentTarget }: {currentTarget: any}) => {
    const { scrollHeight, clientHeight, scrollTop } = currentTarget;

    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
      setIsScrollComplete(true);
    }
  }, []);

  useEffect(() => {
    const targetElement = ref.current;

    if (targetElement) {
      targetElement.addEventListener('scroll', onScroll);

      if (isScrollComplete) {
        targetElement.removeEventListener('scroll', onScroll);
      }
    }

    return () => {
      if (targetElement) {
        targetElement.removeEventListener('scroll', onScroll);
      }
    };
  }, [isScrollComplete]);

  return {isScrollComplete};
}
