import React, { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

import { exampleProgKey } from '../../config'

const ProgramsRouter = lazy(() => import('../programs'))
const TeamsRouter = lazy(() => import('../teams'))

const DemoRouter = () => {
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
        <Route path='/' >
          <Route path='programs/*' element={<ProgramsRouter />} />
          <Route path='teams/*' element={<TeamsRouter />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default DemoRouter
