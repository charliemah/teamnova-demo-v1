import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import LeadMentorCard from '../LeadMentorCard'

const LeadMentorsGrid = ({leadMentors}) => {

  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {leadMentors.map((leadMentor) => (
          <LeadMentorCard key={leadMentor._id} leadMentor={leadMentor} />
        ))}
      </Grid>
    </Container>
  )
}

export default LeadMentorsGrid