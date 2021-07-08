import type { ActionType } from 'actions/page1Action';
import { Actions } from 'actions/page1Action';

const initialState = {
  roles: [] as string[],
};

type State = typeof initialState;

const page1Reducer = (state = initialState, action: ActionType): State => {
  switch (action.type) {
    case Actions.FETCH_ROLE: {
      const { roles } = action.payload;
      return {
        ...state,
        roles,
      };
    }
    default: {
      return state;
    }
  }
};

export default page1Reducer;
