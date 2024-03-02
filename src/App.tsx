import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalStyles } from './styles'
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
