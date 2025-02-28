import { Suspense ,useEffect} from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false, speed: 400, easing: 'ease' })

const LazyWrapper = (Component) => {
  NProgress.start()

  const SuspendedComponent = () => {
    useEffect(() => {
      NProgress.done()
    }, [])
    return <Component />
  }

  return (
    <Suspense fallback={null}>
      <SuspendedComponent />
    </Suspense>
  )
}

export default LazyWrapper
