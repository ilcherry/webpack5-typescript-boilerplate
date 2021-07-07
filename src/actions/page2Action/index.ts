export enum Actions {
  FETCH_COUNT = 'FETCH_COUNT',
  RETRIEVE_COUNT = 'RETRIEVE_COUNT',
}

interface FetchCountActionPayload {
  count: number;
}

interface FetchCountAction {
  type: Actions;
  payload: FetchCountActionPayload;
}

export const fetchCountAction = (payload: FetchCountActionPayload) => ({
  type: Actions.FETCH_COUNT,
  payload,
});

export const retrieveCountAction = () => ({
  type: Actions.RETRIEVE_COUNT,
});

export type ActionType = FetchCountAction;
