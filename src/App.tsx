import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import { GlobalStyles } from './styles'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
