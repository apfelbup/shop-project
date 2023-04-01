import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from 'react-router-dom'
import { persistor,store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={'loader'} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
