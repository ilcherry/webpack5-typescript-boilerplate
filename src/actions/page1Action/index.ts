export enum Actions {
  RETRIEVE_ROLE = 'RETRIEVE_ROLE',
  FETCH_ROLE = 'FETCH_ROLE',
}

interface FetchRolesActionPayload {
  roles: string[];
}

interface FetchRolesAction {
  type: Actions;
  payload: FetchRolesActionPayload;
}

export const fetchRolesAction = (payload: FetchRolesActionPayload) => ({
  type: Actions.FETCH_ROLE,
  payload,
});

export const retrieveRolesAction = () => ({
  type: Actions.RETRIEVE_ROLE,
});

export type ActionType = FetchRolesAction;
