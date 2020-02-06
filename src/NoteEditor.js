import React from 'react';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        
        const { note, handleChange } = this.props;

        return (
            <div>
                <input 
                    value={note.title}
                    onChange={(event) => {
                        // dont mutate an object or array that you receive as an argument
                        // note.title = event.target.value
                        // instead, send back a copy with the updated title
                        handleChange({
                            ...note,
                            title: event.target.value
                        });
                    }}
                />
                <br />
                <textarea 
                    value={note.copy}
                    onChange={(event) => {
                        handleChange({
                            ...note,
                            copy: event.target.value
                        })
                    }}    
                />
            </div>
        )
    }

}




export default NoteEditor;