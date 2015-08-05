import React from 'react';
import Shapetastic from './Shapetastic';

export default class Star {

    static propTypes = {
        style: React.PropTypes.object,
        rotate: React.PropTypes.number,
        radius1: React.PropTypes.number,
        radius2: React.PropTypes.number,
        round: React.PropTypes.bool
    };

    static defaultProps = {
        rotate: 0
    };

    circleStep(radius, angle) {
        console.log(angle, radius * Math.cos(2 * Math.PI * angle));
        return {
            x: radius * Math.cos(2 * Math.PI * angle) + 50,
            y: radius * Math.sin(2 * Math.PI * angle) + 50
        }
    }

    render() {

        const { style, rotate, width, round } = this.props;

        const count = 4;
        let points = [];
        for (let i = 0; i < count; i++) {
            points.push(this.circleStep(50, i / count));
            points.push(this.circleStep(25, i / count + .5));
        }

        console.log(points);

        return (
            <Shapetastic stroke="red">
                <polyline style={style}
                    strokeWidth={width}
                    transform={`rotate(${rotate} 100 100)`}
                    strokeLinecap={round ? 'round' : 'square'}
                    points={points.map(p => `${p.x.toFixed(4)} ${p.y.toFixed(4)}`).join(' ')} />
            </Shapetastic>
        );
    }
}
