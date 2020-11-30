import React from 'react';
import Header from './reading';
import Demo from './demo';


class App extends React.Component {
    state = {
        visible: true
    };

    render() {
        return (
            <div>
                <Demo />
                <Header />
            </div>
        );
    }
}

export default App;
