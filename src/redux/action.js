import axios from 'axios'
import 'dotenv/config'

export const VIEW_NOTE = () => async dispatch => {
    try{
        const res = await axios.get(process.env.REACT_APP_BACKED_PROD_URL)
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