import { Actions, ActionType } from 'actions/page1Action';

interface State {
  roles: string[];
}

const initialState: State = {
  roles: [],
};

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
