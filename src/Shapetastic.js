import React from 'react';

export default class Shapetastic {
    render() {
        return (
            <svg {...this.props}>
                {this.props.children}
            </svg>
        );
    }
}
