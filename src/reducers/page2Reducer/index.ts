import { Actions, ActionType } from 'actions/page2Action';

type State = typeof initialState;

const initialState = {
  count: 0,
};

const page2Reducer = (state = initialState, action: ActionType): State => {
  switch (action.type) {
    case Actions.FETCH_COUNT: {
      const { count } = action.payload;

      return {
        ...state,
        count,
      };
    }

    default: {
      return state;
    }
  }
};

export default page2Reducer;
