import React from 'react'
import ReactMarkdown from 'react-markdown';

const Sidebar = ({ notes,onAddNotes, onDeleteNote, setActiveNote, activeNote }) => {
    
    const soretdNotes = notes.sort((a,b)=> b.lastModified - a.lastModified)

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Dev's Notes</h1>
                <button onClick={onAddNotes}>Add</button>
            </div>
            <div className="app-sidebar-notes">
                {
                    soretdNotes.map((note) => (
                        <div className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                            onClick={() => setActiveNote(note.id)}
                        >
                            <div className="sidebar-note-title">
                                <strong>{note.title}</strong>
                                <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                            </div>

                            <ReactMarkdown>{note.body && note.body.substr(0, 100) + "..."}</ReactMarkdown>

                            <small className="note-meta">
                                Last modified {new Date(note.lastModified).toLocaleDateString("en-IN", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                            </small>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Sidebar
