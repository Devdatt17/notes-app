import uuid from "react-uuid"
export default function reducer(STATE = [], action) {
    switch (action.type) {
        case "ADD_NOTE":
            const newNote = {
                id: uuid(),
                title: "Untitled Note",
                body: "",
                lastModified: Date.now(),
            }
            return [...STATE, newNote]

        case "UPDATE_NOTE":
            return action.payload

        case "DELETE_NOTE":
            return STATE.filter(note => note.id !== action.payload)
            
        default:
            return STATE
    }
}