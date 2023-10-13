import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

const Navigation = lazy(() =>import('./routes/navigation'))
const HomePage = lazy(() =>import('./routes/home'))
const AboutPage = lazy(() =>import('./routes/about'))
const SignUpPage = lazy(() =>import('./routes/signup'))
const SignInPage = lazy(() =>import('./routes/signin'))
const ProgramsRouter= lazy(() =>import('./routes/programs'))
const TeamsRouter= lazy(() =>import('./routes/teams'))

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.programs.asyncFetchPrograms()
  }, [])

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='signin' element={<SignInPage />} />
          <Route path='programs/*' element={<ProgramsRouter />} />
          <Route path='teams/*' element={<TeamsRouter />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
