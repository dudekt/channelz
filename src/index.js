import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import Root from './app/Root'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
};

render(Root);

if (module.hot) {
    module.hot.accept('./app/Root', () => {
        render(Root)
    })
}
