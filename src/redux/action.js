import axios from 'axios'

export const VIEW_NOTE = () => async dispatch => {
    try{
        const res = await axios.get(`https://notes-app-backend-devdatt17s-projects.vercel.app/`)
        dispatch( {
            type: "VIEW_NOTE",
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: "ERROR_NOTE",
            payload: console.log(e),
        })
    }
}

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