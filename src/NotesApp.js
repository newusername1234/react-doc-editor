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
                    id: '1',
                    title: 'first note',
                    copy: 'study'
                },
                {
                    id: '2',
                    title: 'second note',
                    copy: 'sleep'
                },
                {
                    id: '3',
                    title: 'third note',
                    copy: 'study more'
                },
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>REACT NOTES APP</h1>
                <NewNote />
                <SearchBar 
                    setText={this._setSearchText} 
                    text={this.state.searchText}
                />
                <NotesList 
                    notes={this._getFilteredNotes()}
                    handleClick={this._selectNote}
                />
                <NoteEditor 
                    note={this._getNoteById()}
                />
            </div>
        );
    }


    _getNoteById = () => this.state.notes.find(note => note.id === this.state.currentNoteId) || {};

    // _displayNote = () => {
    //     const chosenNote = this.state.notes.filter(note => note.id === this.state.currentNoteId);
        
    //     return chosenNote;
    // }

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