//-----------------------------------------------------------------------
// <copyright file="csr-create-store.ts" website="Patrikduch.com">
//     Copyright 2018 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Klientská konfigurace Redux storu (CSR - Client-Side-Rendering)
//-----------------------------------------------------------------------

// Redux závislosti
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // Podpora asynchronních operací v rámci storu
import reducers from '../../reducers';

// DEV TOOLS rozšíření
const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (state : any) => {
    //return createStore(reducers, state, composeEnhancers(applyMiddleware(thunk)));   
    return createStore(reducers, state, applyMiddleware(thunk)); 
}






