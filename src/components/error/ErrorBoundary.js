import { ErrorBoundary } from 'react-error-boundary'

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <h2>Something went wrong:</h2>
    <pre style={{ color: 'red', whiteSpace: 'pre-wrap' }}>{error.message}</pre>

    <details style={{ whiteSpace: 'pre-wrap' }}>
      <summary>Click to see details</summary>
      <pre>{error.stack}</pre>
    </details>

    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
)

const AppErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        console.log('Error boundary reset triggered.')
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

export default AppErrorBoundary
