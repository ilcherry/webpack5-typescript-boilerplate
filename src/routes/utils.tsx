import React from 'react';
import { Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

export const load = (path: string) =>
  loadable(() => import(`../pages/${path}`));

// eslint-disable-next-line react/display-name
export const redirect = (path: string) => () => <Redirect to={path} />;
