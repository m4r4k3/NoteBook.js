import React from 'react';

export default function Text() {
    return (<textarea
        className="textarea"
        rows="23"
        style={
        { lineHeight: `${((window.innerHeight) / 24)}px`,
            padding: `${Math.round(window.innerHeight / 41.2)}px  0 0 ${Math.round(window.innerWidth / 11) + 5}px `,
        }
    } />);
}
