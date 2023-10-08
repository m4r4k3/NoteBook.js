import React from 'react';

export default function Canvas() {
    React.useEffect(() => {
        const canvas = document.querySelector('.paper');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.lineWidth = -1.5;
        ctx.strokeStyle = 'black';
        ctx.moveTo(-1, 0);
        for (let i = 0; i < 25; i += 1) {
            const y = (canvas.height / 24) * i;
            ctx.moveTo(-1, y);
            ctx.lineTo(canvas.width, y);
        }
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'red';
        ctx.moveTo(canvas.width / 11, 0);
        ctx.lineTo(canvas.width / 11, canvas.height);
        ctx.stroke();
        ctx.closePath();
    }, []);
    return (<canvas className="paper" width={window.innerWidth} height={window.innerHeight} />);
}
