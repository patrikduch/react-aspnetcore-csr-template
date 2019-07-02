// Import of all actions types
import * as actionTypes from "../../actions/action-types";
// Import initial state configuration
import initialState from "../../reducers/initial-state";

// Reducer must be created before the store object
const reducer = (state: any = initialState.test, action: any) => {
  switch (action.type) {
    case actionTypes.TEST_ACTION:
      return {
        ...state,

        content: action.data
      };

    default:
      return state;
  }
};

export default reducer;
