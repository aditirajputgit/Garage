import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import Work from './components/Work'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/work" component={Work} />
      <Route component={NotFound} />
      <Footer />
    </Switch>
  </BrowserRouter>
)

export default App
