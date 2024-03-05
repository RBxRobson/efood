import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Rotas from './routes'
import Cart from './components/Cart'

import { GlobalStyles } from './styles'
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
