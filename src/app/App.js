

import React from 'react'
import ErrorBoundary from '../Views/pages/ErrorBoundary/ErrorBoundary'

import Routes from '../views/Routes/Routes'

const App =() => {
	return (
		<div className="app">
			<ErrorBoundary>
				<Routes />
			</ErrorBoundary>
		</div>
	)
}

export default App