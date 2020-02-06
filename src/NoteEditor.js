import React from 'react';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changedNote: {}
        };
    }

    // receiving the new props and the existing state
    static getDerivedStateFromProps(props, state) {
        console.log('we are in getDerivedStateFromProps');
        console.table(props.note);
        console.table(state.changedNote);
        
        if (props.note.id === state.changedNote.id) {
            return {
                ...state
            }
        } else {
            return {
                ...state,
                changedNote: {
                    ...props.note
                }
            }
        }
    }

    render() {

        return (
            <div>
                <form  onSubmit={this._handleSubmit}>
                    <input 
                        value={this.state.changedNote.title}
                        onChange={(event) => {
                            this._updateLocalNote({
                                ...this.state.changedNote,
                                title: event.target.value
                            });
                        }}
                    />
                    <br />
                    <textarea 
                        value={this.state.changedNote.copy}
                        onChange={(event) => {
                            this._updateLocalNote({
                                ...this.state.changedNote,
                                copy: event.target.value
                            })
                        }}    
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleChange(this.state.changedNote);
    }

    _updateLocalNote = (changedNote) => {
        this.setState({
            changedNote
        });
    }

}




export default NoteEditor;