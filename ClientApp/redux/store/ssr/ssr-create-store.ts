// Redux závislosti
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../reducers';
// Export of new redux store
export default createStore(reducers, {}, applyMiddleware(thunk));       
