import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Rotas from './routes'
import SideBar from './components/SideBar'

import { GlobalStyles } from './styles'
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
        <Footer />
        <SideBar />
      </BrowserRouter>
    </Provider>
  )
}

export default App
