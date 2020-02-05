import React from 'react';
import NotesList from './NotesList';

function NotesListItem({id, title}) {
    return (
        <li>{title}</li>
    );
}

export default NotesListItem;