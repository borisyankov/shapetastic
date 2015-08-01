import React from 'react';

export default class XPrimitive {

    static propTypes = {
        style: React.PropTypes.object,
        rotate: React.PropTypes.number,
        width: React.PropTypes.number,
        round: React.PropTypes.bool
    };

    static defaultProps = {
        rotate: 0
    };

    render() {

        const { style, rotate, width, round } = this.props;

        return (
            <g style={style}
                strokeWidth={width}
                transform={`rotate(${rotate} 100 100)`}
                strokeLinecap={round ? 'round' : 'square'}>
                <line x1={0} y1={50} x2={100} y2={50} />
                <line x1={50} y1={0} x2={50} y2={100}  />
            </g>
        );
    }
}
