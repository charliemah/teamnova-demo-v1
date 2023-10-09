import { Routes, Route } from 'react-router-dom'

import TeamDetail from '../team-detail'
import MentorDetail from '../mentor-detail'
import SprintDetail from '../sprint-detail'

const TeamsRouter = () => {

  return (
    <Routes>
      <Route path=':teamKey' element={<TeamDetail />} />
      <Route path=':teamKey/mentors/:roleNumber' element={<MentorDetail />} />
      <Route path=':teamKey/sprints/:sprintNumber' element={<SprintDetail />} />
    </Routes>
  )
}

export default TeamsRouter


