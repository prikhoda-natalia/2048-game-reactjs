export function throttle<Args extends unknown[]>(
  func: (...args: Args) => void,
  limit: number
): ((...args: Args) => void) & { cancel: () => void } {
  let inThrottle = false;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const throttledFunction = function (...args: Args): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      timeoutId = setTimeout(() => {
        inThrottle = false;
        timeoutId = null;
      }, limit);
    }
  };

  throttledFunction.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      inThrottle = false;
    }
  };

  return throttledFunction;
}
