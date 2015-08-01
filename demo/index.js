import React from 'react';
import { Cross, PlusSign } from '../lib/index';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <Cross width={1} />
                <Cross width={5} />
                <PlusSign width={2} />
            </div>
        );
    }
}

React.render(
    <Demo />,
    document.getElementById('root')
);
