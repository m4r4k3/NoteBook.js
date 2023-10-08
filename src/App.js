import React from 'react';
import Front from './components/front';
import Back from './components/back';
import Canvas from './components/canvas';
import Text from './components/text';
import './style.css';

export default function App() {
    const [styleNote, setStyleNote] = React.useState({});
    const [style, setStyle] = React.useState({});
    return (
        <div className="container" style={style}>
            <div className="noteBook" style={styleNote}>
                <Front cSetStyle={setStyle} cSetStyleNote={setStyleNote} />
                <Back />
            </div>
            <Canvas />
            <Text />
        </div>
    );
}
