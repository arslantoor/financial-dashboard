import { ErrorBoundary } from 'react-error-boundary'
import PropTypes from 'prop-types'
import { memo, useCallback } from 'react'

const ErrorFallback = memo(({ error, resetErrorBoundary }) => {
  const handleReset = useCallback(() => {
    resetErrorBoundary()
  }, [resetErrorBoundary])

  return (
    <div role="alert" className="p-4 bg-red-100 rounded-lg">
      <h2 className="text-lg font-bold text-red-600 mb-2">Something went wrong:</h2>
      <pre className="text-sm text-red-500 mb-2">{error.message}</pre>

      {error.stack && (
        <details className="text-sm mb-4">
          <summary className="cursor-pointer text-blue-600">Click to see details</summary>
          <pre className="overflow-auto max-h-40">{error.stack}</pre>
        </details>
      )}

      <button
        onClick={handleReset}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Try again
      </button>
    </div>
  )
})

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    stack: PropTypes.string,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
}

const AppErrorBoundary = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
)

AppErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppErrorBoundary
