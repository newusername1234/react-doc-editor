import React from 'react';

function NoteEditor({displayedNote, updateNote}) {
    return (
        <textarea 
            onChange={(event) => {
                updateNote(event.target.value)
            }} 
            value={displayedNote.map(note => note.copy)}
        />
    )
}

export default NoteEditor;