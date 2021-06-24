import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import routeToStoreMap from 'actions/index';

const useFetch = () => {
  const dispatch = useDispatch();
  const [pathname, setPathname] = useState<string>();

  useEffect(() => {
    if (pathname && routeToStoreMap[pathname]) {
      dispatch(routeToStoreMap[pathname]());
    }
  }, [dispatch, pathname]);

  return {
    setPathname,
  };
};

export default useFetch;
