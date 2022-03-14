export const ADD_NOTE=  (payload)=>{
    return {
        type: 'ADD_NOTE',
        payload
    }
}

export const UPDATE_NOTE = (payload)=>{
    return {
        type: 'UPDATE_NOTE',
        payload
    }
}

export const DELETE_NOTE = (payload)=>{
    return {
        type: 'DELETE_NOTE',
        payload
    }
}