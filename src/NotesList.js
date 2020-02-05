import React from 'react';
import NotesListItem from './NotesListItem';

function NotesList({handleClick, notes}) {
    return (
        <ul>
            {

                notes.map(note => (
                    <NotesListItem 
                        id={note.id} 
                        title={note.title}
                        key={note.id}
                        handleClick={handleClick}
                    />
                ))
            }
        </ul>
    );
}

export default NotesList;