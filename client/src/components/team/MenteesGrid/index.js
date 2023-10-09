import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import MenteeCard from '../MenteeCard'

const MenteesGrid = ({roles}) => {

  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {roles.map((role) => (
          <MenteeCard key={role._id} role={role} />
        ))}
      </Grid>
    </Container>
  )
}

export default MenteesGrid