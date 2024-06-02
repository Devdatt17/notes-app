import axios from 'axios'

export const VIEW_NOTE = () => async dispatch => {
    try{
        const res = await axios.get(process.env.REACT_APP_BACKEND_PROD_URL)
        dispatch({
            type: "VIEW_NOTE",
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: "ERROR_NOTE",
            payload: e,
        })
    }
}

export const ADD_NOTE = (payload) => async dispatch => {
    await axios.post(process.env.REACT_APP_BACKEND_PROD_URL.concat(payload._id), {
        data: {
            ...payload
        }
    })
    dispatch({
        type: 'ADD_NOTE',
        payload
    })
}

export const UPDATE_NOTE = (payload)=>async dispatch => {
    const res = await axios.patch(process.env.REACT_APP_BACKEND_PROD_URL.concat(payload._id))
    dispatch({
        type: 'UPDATE_NOTE',
        payload: payload
    })
    return res
}

export const DELETE_NOTE = (payload)=> async dispatch => {
    const deleteNoteId = payload._id || payload
    await axios.delete(process.env.REACT_APP_BACKEND_PROD_URL.concat(deleteNoteId))
    dispatch({
        type: 'DELETE_NOTE',
        payload
    })
}