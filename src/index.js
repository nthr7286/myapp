import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './Components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Fragment>
    <CssBaseline />
    <App />
  </Fragment>,
  document.getElementById('root')
)

serviceWorker.unregister()
