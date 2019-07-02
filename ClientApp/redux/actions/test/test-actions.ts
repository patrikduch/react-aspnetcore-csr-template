import { addTask } from 'domain-task';

// REST API
import TestDataApi from '../../../api/endpoints/test-api';

// Všechny možné Reduxové akce
import * as actionTypes from '../../actions/action-types';

export const getTestData : any = () => async (dispatch: Function) => {

    const ret = TestDataApi.getTestData().then((arg: any) => {
        const data = arg;   
        dispatch({ type: actionTypes.TEST_ACTION, data });
    })

    addTask(ret); // Zajištění zpracování načítání dat před prvním vykreslením

}