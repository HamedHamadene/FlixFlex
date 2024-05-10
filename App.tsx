/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import configureStore from './app/redux';
import {Provider} from 'react-redux';
import Navigation from './app/navigation/AppNavigation';
import NetworkConnection from "./app/utils/NetworkConnection";

const store = configureStore();
const App = () => {
    return (
        <Provider store={store}>
            <NetworkConnection/>
            <Navigation/>
        </Provider>
    );
};

export default App;
