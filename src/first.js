import React from 'react';

export default function First() {
    const [name, setName] = React.useState('');
    const [nickName, setNickName] = React.useState('');
    React.useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('nickName', nickName);
    }, [name, nickName]);
    return (
        <div className="container">
            <div id="title">
                <div>
                    <label htmlFor="name">Name:</label> <input onInput={e => setName(e.target.value)} type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="nickName" >Nick Name:</label><input onInput={e => setNickName(e.target.value)} type="text" name="" id="nickName" />
                </div>
            </div>
        </div>
    );
}
