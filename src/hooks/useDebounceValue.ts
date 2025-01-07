import { useCallback, useEffect, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: unknown[]) => void;

export function useDebounceFunction<Func extends SomeFunction>(func: Func, delay = 1000) {
  const timer = useRef<Timer>(null);

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  return useCallback(
    (...args: Parameters<Func>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        func(...args);
        timer.current = null;
      }, delay);
    },
    [delay, func],
  );
}
