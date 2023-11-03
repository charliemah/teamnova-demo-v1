import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProgramDetail from '../program-detail'

const ProgramsRouter = () => {
  return (
    <Routes>
      <Route path=':progKey' element={<ProgramDetail />} />
    </Routes>
  )
}

export default ProgramsRouter
