import React from 'react';

// SearchBar.defaultProps = {
//     text: 'default search text'
// }

function SearchBar({text, setText}) {
    return (
        <input 
            onChange={(event) => {
                setText(event.target.value)
        }}
            value={text}
        />
    )
}

export default SearchBar;