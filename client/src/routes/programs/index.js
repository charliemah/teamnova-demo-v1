import { Routes, Route } from 'react-router-dom'

import ProgramsPreview from '../programs-preview'
import ProgramDetail from '../program-detail'

const ProgramsRouter = () => {

  return (
    <Routes>
      <Route index element={<ProgramsPreview />} />
      <Route path=':progKey' element={<ProgramDetail />} />
    </Routes>
  )
}

export default ProgramsRouter


