import React from 'react'
import ReactMarkdown from 'react-markdown'

const Main = ({ activeNote ,onUpdateNote}) => {
    const onEditField =(key,value)=>{
        onUpdateNote({
            ...activeNote,
            [key]:value,
            lastModified:Date.now(),
        })
    }

    if(!activeNote) return <div className="no-active-note">No Note Selected</div>
 
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input 
                type="text" 
                id="title" 
                value={activeNote.title || 'Untitled Note'} 
                onChange={(e)=>onEditField('title',e.target.value)} 
                autoFocus
                />
                <textarea
                id="message"
                placeholder="Write the notes here....."
                value={activeNote.message}
                onChange={(e)=>onEditField('message',e.target.value)}
                ></textarea>               
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title || 'Untitled Note'}</h1>
                <ReactMarkdown className="markdown-preview">{ activeNote.message }</ReactMarkdown>
            </div>
        </div>
    )
}

export default Main
