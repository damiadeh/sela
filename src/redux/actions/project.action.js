import * as actionTypes from './actionTypes';
import * as util from '../utility';

export const addProjectSuccess = (message) => {
    return {
        type: actionTypes.ADD_PROJECT_SUCCESS,
        message: message,
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

export const clearResponse = () => {
    return {
        type: actionTypes.CLEAR_RESPONSE,
    };
};

export const dispatchClearResponse = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(clearResponse());
        }, 4000);
    };
};

export const fetchProjects = () => {
    return dispatch => {
        dispatch(fetchingProjectsStart())
        fetch('/.netlify/functions/projectRead')
            .then(res => {
                res.json();
            })
            .then(response => console.log(response.msg))
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
            .then((res) =>  res.json())
            .catch((err) => console.log(err))

    //     util.postItem('projectCreate', data)
    //   .then(response => {

    //     console.log("projectCreate");
    //     console.log(response.msg);
    //     console.log(response.data);
    //     dispatch(addProjectSuccess());
         
    //   })
    //   .catch(err => console.log('Product.create API error: ', err))

    //   export const postItem = (source, data) => {
    //     return fetch('/.netlify/functions/' + source, {
    //         method: 'post',
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .catch(err => err)
    // }

    }
}