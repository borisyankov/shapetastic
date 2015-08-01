import React from 'react';
import Shapetastic from './Shapetastic';
import XPrimitive from './XPrimitive';

export default class PlusSign {
    render() {
        return (
            <Shapetastic stroke="red">
                <XPrimitive {...this.props} />
            </Shapetastic>
        );
    }
}
