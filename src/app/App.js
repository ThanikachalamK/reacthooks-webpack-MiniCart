import React from 'react'
import ErrorBoundary from '../views/pages/ErrorBoundary'

import Routes from '../views/Routes/Routes'

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </div>
  )
}

export default App
