import uuid from "react-uuid"
export default function reducer(STATE = [], action) {
    switch (action.type) {
        case "ADD_NOTE":
            const newNote = {
                _id: uuid(),
                title: "Untitled Note",
                message: "",
                lastModified: Date.now(),
            }
            return [...STATE, newNote]

        case "UPDATE_NOTE":
            return action.payload

        case "DELETE_NOTE":
            return STATE.filter(note => note._id !== action.payload)
            
        case "VIEW_NOTE":
            return [...action.payload]
        default:
            return STATE
    }
}