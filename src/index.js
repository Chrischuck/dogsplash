
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import store from './modules'

import './index.css'

import App from './containers/app'

ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)