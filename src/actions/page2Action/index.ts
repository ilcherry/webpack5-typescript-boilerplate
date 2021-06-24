/* eslint-disable no-unused-vars */
export enum Actions {
  FETCH_COUNT = 'FETCH_COUNT',
  RETRIEVE_ROLE = 'RETRIEVE_ROLE',
}

interface FetchCountActionPayload {
  count: number;
}

interface FetchCountAction {
  type: Actions;
  payload: FetchCountActionPayload;
}

export const fetchCountAction = (
  payload: FetchCountActionPayload
): FetchCountAction => ({
  type: Actions.FETCH_COUNT,
  payload,
});

export const retrieveCountAction = () => ({
  type: Actions.RETRIEVE_ROLE,
});

export type ActionType = FetchCountAction;
