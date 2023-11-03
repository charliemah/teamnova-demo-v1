import React from 'react'
import { Routes, Route } from 'react-router-dom'

import TeamDetail from '../team-detail'
import MentorDetail from '../mentor-detail'

const TeamsRouter = () => {
  return (
    <Routes>
      <Route path=':teamKey' element={<TeamDetail />} />
      <Route path=':teamKey/mentors/:roleNumber' element={<MentorDetail />} />
    </Routes>
  )
}

export default TeamsRouter
