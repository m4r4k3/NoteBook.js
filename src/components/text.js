import React from 'react';

export default function Text() {
    React.useEffect(
        () => {
            document.querySelector('textarea').innerHTML = localStorage.getItem('note');
            window.onunload = () => {
                localStorage.setItem('note', document.querySelector('textarea').value);
            };
        }, []);
    return (<textarea
        className="textarea"
        rows="23"
        style={
        {
            lineHeight: `${((window.innerHeight) / 24)}px`,
            padding: `${(window.innerHeight / 24) - 26.125}px  0 0 ${Math.round(window.innerWidth / 11) + 5}px `,
        }
    } />);
}
