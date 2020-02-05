import React from 'react';

import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNoteId: '',
            searchText: '',
            notes: [
                {
                    id: 'aaaaa',
                    title: 'first note',
                    copy: 'lalala'
                },
                {
                    id: '44444',
                    title: 'second note',
                    copy: 'bababa'
                },
                {
                    id: 'a1b2c5',
                    title: 'third note',
                    copy: 'hahaha'
                },
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>this is my notes app</h1>
                <NewNote />
                <SearchBar 
                    setText={this._setSearchText} 
                    text={this.state.searchText}
                />
                <NotesList 
                    notes={this._getFilteredNotes()}
                    handleClick={this._selectNote}
                />
                <NoteEditor />
            </div>
        );
    }

    _getFilteredNotes = () => {
        const filteredArray = this.state.notes.filter(note => {
            
            const titleDoesMatch = note.title.toLowerCase().includes(this.state.searchText.toLowerCase());
            const copyDoesMatch = note.copy.toLowerCase().includes(this.state.searchText.toLowerCase());

            return titleDoesMatch || copyDoesMatch;

        });

        return filteredArray;
    }

    _setSearchText = (searchText) => {
        this.setState({
            searchText
        });
    }

    _selectNote = (currentNoteId) => {
        this.setState({
            currentNoteId
        }, () => {
            console.log('updated current id')
        });
    }
}

export default NotesApp;