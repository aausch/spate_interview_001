import React from 'react';
import { Provider } from 'react-redux';

import Account from '../views/Account'

import store from '../../utils/app/store.js';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app-wrapper">
                    <Account />
                </div>
            </Provider>
        );
    }
}

export default App
