import { combineReducers } from 'redux';

// Všechny reducery, které jsou sloučeny do jednoho hlavního
import testReducer from '../reducers/test/test-reducer';

// Slučovací proces reducerů
export default combineReducers({
    test: testReducer
});

