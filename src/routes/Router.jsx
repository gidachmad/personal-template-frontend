import { Routes, Route } from 'react-router-dom'
import { route } from './Routes'
import App from '@/App'
import NotFound from '@/pages/NotFound'

export default function Router() {
  const pageRoutes = route.map((item) => {
    return (
      <Route key={item.name} path={`${item.path}`} element={item.element} />
    )
  })

  return (
    <Routes>
      <Route element={<App />}>{pageRoutes}</Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
