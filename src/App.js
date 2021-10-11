import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Components
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import GalleryPage from './components/GalleryPage/GalleryPage'
import DeliPage from './components/DeliPage/DeliPage'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'


// Styles

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"><Header homepage/></Route>
          <Route component={Header}/>
        </Switch>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/galeria" component={GalleryPage}/>
          <Route path="/rancho-deli" component={DeliPage}/>
          <Route component={NotFound} />
        </Switch>

      </Router>

      <Footer/>
    </>
  )
}