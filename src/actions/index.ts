import { retrieveRolesAction } from './page1Action';
import { retrieveCountAction } from './page2Action';

type routeToStoreMapType = Record<string, Function>;

const routeToStoreMap: routeToStoreMapType = {
  '/page1': retrieveRolesAction,
  '/page2': retrieveCountAction,
};

export default routeToStoreMap;
