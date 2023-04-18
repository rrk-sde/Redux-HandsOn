import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Store from './store'
import { Provider } from 'react-redux'


Store.subscribe(() => { console.log(Store.getState()) })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
