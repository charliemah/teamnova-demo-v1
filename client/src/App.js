import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

import { exampleProgKey } from './config'
import Footer from './components/generic/Footer'

const Navigation = lazy(() =>import('./routes/navigation'))
const HomePage = lazy(() =>import('./routes/home'))
const AskCharliePage = lazy(() =>import('./routes/ask-charlie'))
const ProgramsRouter= lazy(() =>import('./routes/programs'))
const TeamsRouter= lazy(() =>import('./routes/teams'))

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.programs.asyncFetchPrograms()
  }, [])

  useEffect(() => {
    dispatch.teams.asyncFetchTeamsByProgram(exampleProgKey)
  }, [exampleProgKey])

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path='ask-charlie' element={<AskCharliePage />} />
          <Route path='programs/*' element={<ProgramsRouter />} />
          <Route path='teams/*' element={<TeamsRouter />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default App
