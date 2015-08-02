import React from 'react';
import { Shapetastic, Cross } from '../lib/index';

console.log('Cross', Cross);
//console.log('Cross', Cross);

class Demo extends React.Component {
    render() {
        return (
            <div>
                <Shapetastic>
                    <Cross />
                </Shapetastic>
            </div>
        );
    }
}

React.render(
    <Demo />,
    document.getElementById('root')
);
