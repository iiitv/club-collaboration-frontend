import React from 'react'
import App from './app'
import {createStore} from 'redux'
import rootReducer from './Datafiles/rootReducer'
import {Provider} from 'react-redux'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

const store = createStore(rootReducer)


ReactDom.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store = {store}>
                <App />
            </Provider>
            </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
);