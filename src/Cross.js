import React from 'react';

export default class Cross {
    render() {
        return (
            <g stroke="rgb(255,0,0)" strokeWidth="20" transform="rotate(45 100 100)" stroke-linecap="round">
                <line x1="0" y1="100" x2="200" y2="100" />
                <line x1="100" y1="0" x2="100" y2="200"  />
            </g>
        );
    }
}
