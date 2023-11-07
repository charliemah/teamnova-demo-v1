import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Footer from './components/generic/Footer'

const Navigation = lazy(() => import('./routes/navigation'))
const HomePage = lazy(() => import('./routes/home'))
const DemoRouter = lazy(() => import('./routes/demo'))

const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path='demo/*' element={<DemoRouter />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default App
