import React from 'react';
import NotesListItem from './NotesListItem';

function NotesList({notes}) {
    return (
        <ul>
            {

                notes.map(note => (
                    <NotesListItem 
                        id={note.id} 
                        title={note.title}
                        key={note.id}
                    />
                ))
            }
        </ul>
    );
}

export default NotesList;