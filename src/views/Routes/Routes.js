import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Header from '../custom/Header'

const Home = lazy(() => import('../pages/Home/Home'))
const LearnMore = lazy(() => import('../pages/LearnMore/LearnMore'))
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'))

const Routes = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/learnMore/:id" component={LearnMore} />
          <Route path="/404" component={PageNotFound} />
          {/* Default to "404" for unknown routes */}
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
