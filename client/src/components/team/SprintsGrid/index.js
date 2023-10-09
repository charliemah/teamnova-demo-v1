import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import SprintCard from '../SprintCard'

const SprintsGrid = ({sprints}) => {
  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {sprints.map((sprint) => (
          <SprintCard key={sprint.number} sprint={sprint} />
        ))}
      </Grid>
    </Container>
  )
}

export default SprintsGrid