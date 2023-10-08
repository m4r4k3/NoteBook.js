import React from 'react';

export default function Front(props) {
    const setStyle = props.cSetStyle;
    const setStyleNote = props.cSetStyleNote;

    async function rotate(e) {
        if (e.currentTarget.id !== 'title') {
            setStyleNote({
                transition: 'ease-in 1000ms',
                transform: 'rotateY(.5turn) ',
            });

            await delay(1001);
            setStyle({
                animation: 'ease-out zoom ',
                animationDuration: '800ms',
            });
            await delay(800);
            setStyle({
                height: '100vh',
                width: '100vw ',
                margin: 0,
            });
        }
    }

    const [name, setName] = React.useState(localStorage.getItem('name') ? localStorage.getItem('name') : '');
    const [nickName, setNickName] = React.useState(localStorage.getItem('nickName') ? localStorage.getItem('nickName') : '');

    React.useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('nickName', nickName);
    }, [name, nickName]);

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div className="front" onClick={(e) => { rotate(e); }} >
            <div id="title" onClick={(e) => { e.stopPropagation(); rotate(e); }}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input value={name} onInput={e => setName(e.target.value)} type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="nickName" >Nick Name:</label>
                    <input value={nickName} onInput={e => setNickName(e.target.value)} type="text" name="" id="nickName" />
                </div>
            </div>
        </div>
    );
}
