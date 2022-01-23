import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const Cart = lazy(() => import('../pages/Cart'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))

const Routes = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route path="/404" component={PageNotFound} />
          {/* Default to "404" for unknown routes */}
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
