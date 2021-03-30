import React from 'react'

const Sidebar = (props) => {
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Dev's Notes</h1>
                <button onClick={props.onAddNotes}>Add</button>
            </div>
            <div className="app-sidebar-notes">
                {
                    props.notes.map((items) => (
                        <div className="app-sidebar-note">
                            <div className="sidebar-note-title">
                                <strong>{ items.title }</strong>
                                <button onClick={()=>props.onDeleteNote(items.id)}>Delete</button>
                            </div>
                            
                            <p>{ items.body && items.body.substr(0,100)+"..." }</p>
                            
                            <small className="note-meta">
                                Last modified { new Date(items.lastModified).toLocaleDateString("en-IN",{
                                    hour:"2-digit",
                                    minute:"2-digit",
                                }) }
                            </small>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Sidebar
