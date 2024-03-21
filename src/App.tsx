import { Total } from './Total/Total'
import { Header } from './Header/Header'
import { Cart } from './Cart/Cart'
import './App.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { OrderModal } from './OrderModal/OrderModal'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <div className="App">
          <Header />
          <Cart />
          <Total />
          <OrderModal />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
