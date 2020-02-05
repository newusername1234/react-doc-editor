import React from 'react';
import NotesList from './NotesList';

function NotesListItem({handleClick, id, title}) {
    return (
        <li onClick={() => {
            console.log(`you clicked ${id}`);
            handleClick(id);
        }}>{title}</li>
    );
}

export default NotesListItem;