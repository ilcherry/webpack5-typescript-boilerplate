import webpackMockServer from 'webpack-mock-server';

import { glsResponse } from './utils';

interface RoleResult {
  roles: string[];
}

interface CountResult {
  count: number;
}

export default webpackMockServer.add(app => {
  app.get('/roles', (_, res) => {
    res.json(
      glsResponse<RoleResult>({ data: { roles: ['admin', 'customer'] } })
    );
  });

  app.get('/count', (_, res) => {
    res.json(glsResponse<CountResult>({ data: { count: 99 } }));
  });
});
