import React from 'react'

const Main = () => {
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" autoFocus/>
                <textarea id="body" placeholder="Write the notes here....."></textarea>               
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">TITLE</h1>
                <div className="markdown-preview">Notes Preview</div>
            </div>
        </div>
    )
}

export default Main
