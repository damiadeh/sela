export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

export const setProjectProps = (project) => {
    const projectProps = {}

    // looping through product props and excluding id
    Object.keys(project).forEach(key => {
        if (key !== '_id' && key !== '__v') {
            projectProps[key] = project[key]
        }
    })
    return projectProps
}

export const postItem = (source, data) => {
    return fetch('/.netlify/functions/' + source, {
        method: 'post',
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => err)
}

export const wordTrimmer = (str, length, ending) => {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}


export const formatAmount = (amount) => {
    return amount.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
};