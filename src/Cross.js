import React from 'react';
import Shapetastic from './Shapetastic';
import XPrimitive from './XPrimitive';

export default class Cross {
    render() {
        return (
            <Shapetastic stroke="red">
                <XPrimitive rotate={45} {...this.props} />
            </Shapetastic>
        );
    }
}
