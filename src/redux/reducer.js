export default function reducer(STATE = [], action) {
    switch (action.type) {
        case "ADD_NOTE":
            STATE.unshift(action.payload)
            return [...STATE]

        case "UPDATE_NOTE":
            STATE.map((note,index) => {
                return note._id === action.payload._id ? STATE[index] = action.payload : note
            })
            return [...STATE]

        case "DELETE_NOTE":
            return STATE.filter(note => note._id !== action.payload)
            
        case "VIEW_NOTE":
            return [...action.payload]
        default:
            return STATE
    }
}