import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

//--response type--//
// 0 - default
// 1 - success
// 2 - error


const initialState = {
    project: [],
    FetchingProject: false,
    AddingProject: false,
    responseType: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.ADD_PROJECT_SUCCESS):
            return updateObject(state, { responseType: 1, AddingProject: false });
        case (actionTypes.ADD_PROJECT_START):
            return updateObject(state, { AddingProject: true });
        case (actionTypes.ADD_PROJECT_FAILED):
            return updateObject(state, { AddingProject: false, responseType: 2 });
        case (actionTypes.FETCHING_PROJECTS_START):
            return updateObject(state, { FetchingProject: true });
        case (actionTypes.FETCHING_PROJECTS_SUCCESS):
            return updateObject(state, { project: action.data, FetchingProject: false });
        case (actionTypes.FETCHING_PROJECTS_FAILED):
            return updateObject(state, { FetchingProject: false });
        case (actionTypes.RESET_PROJECT_STATE):
            return updateObject(state, { responseType: 0 });
        default:
            return state;
    }
};

export default reducer;