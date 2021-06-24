import { useEffect, useState } from 'react';
import nprogress from 'nprogress';

import 'nprogress/nprogress.css';

const useProgress = (
  {
    mountOnly = true,
    configure = {
      showSpinner: false,
    },
  } = { mountOnly: true }
) => {
  const [isMounted, setIsMounted] = useState(false);
  if (!isMounted) {
    nprogress.configure(configure);
    nprogress.start();
  }
  useEffect(() => {
    setIsMounted(true);
    if (isMounted && mountOnly) {
      nprogress.done();
    }
  });
  return [nprogress.status || 1, nprogress.done];
};

export default useProgress;
