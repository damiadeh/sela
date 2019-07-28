import * as actionTypes from './actionTypes';
import * as util from '../utility';

export const addProjectSuccess = () => {
    return {
        type: actionTypes.ADD_PROJECT_SUCCESS,
    };
};

export const addProjectStart = () => {
    return {
        type: actionTypes.ADD_PROJECT_START,
    };
};

export const addProjectFailed = (message) => {
    return {
        type: actionTypes.ADD_PROJECT_FAILED,
        message: message
    };
};

export const fetchingProjectsSuccess = (data) => {
    return {
        type: actionTypes.FETCHING_PROJECTS_SUCCESS,
        data: data,
    };
};

export const fetchingProjectsStart = () => {
    return {
        type: actionTypes.FETCHING_PROJECTS_START,
    };
};

export const fetchingProjectsFailed = (message) => {
    return {
        type: actionTypes.FETCHING_PROJECTS_FAILED,
        message: message
    };
};

export const resetProjectState = () => {
    return {
        type: actionTypes.RESET_PROJECT_STATE,
    }
}

//TODO : display success/error response and clear after 7 seconds
export const clearResponse = () => {
    return {
        type: actionTypes.CLEAR_RESPONSE,
    };
};

export const dispatchClearResponse = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(clearResponse());
        }, 7000);
    };
};

export const fetchProjects = () => {
    return dispatch => {
        // dispatch(fetchingProjectsStart())
        fetch('/.netlify/functions/projectRead')
            .then(res => res.json())
            .then(response => dispatch(fetchingProjectsSuccess(response.data)))
            //     {
            //     console.log(response.msg)
            //     const projectData = [];
            //     const projects = response.data;
            //     if(projects){
            //         projects.forEach(project => {
            //             const projectProps = util.setProjectProps(project)
            //             projectData.push(projectProps)
            //         })
            //     }
            //     dispatch(fetchingProjectsSuccess(projectData));
            //     dispatch(dispatchClearResponse());
            // })
            .catch((err) => {
                console.log('Error retrieving projects: ', err);
                dispatch(fetchingProjectsFailed("Something went wrong!!!"));
            })
    }
}

export const addProject = (data) => {
    return dispatch => {
        dispatch(addProjectStart());
        fetch('/.netlify/functions/projectCreate', {
            method: 'post',
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(() =>  dispatch(addProjectSuccess()))
            .catch((err) => {
                console.log(err);
                dispatch(addProjectFailed('Adding project failed'))
            })
    }
}