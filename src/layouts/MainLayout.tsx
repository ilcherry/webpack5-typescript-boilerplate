import type { FC } from 'react';
import { useEffect } from 'react';
import type { RouteConfig } from 'react-router-config';
import { renderRoutes } from 'react-router-config';
import { useLocation } from 'react-router-dom';
import useFetch from 'hooks/useFetch';

const MainLayout: FC<RouteConfig> = ({ route }) => {
  const { routes } = route;
  const { setPathname } = useFetch();
  const { pathname } = useLocation();

  useEffect(() => {
    setPathname(pathname);
  }, [pathname, setPathname]);

  return renderRoutes(routes);
};

export default MainLayout;
