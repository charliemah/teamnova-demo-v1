import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import TeamCard from '../TeamCard'

const TeamsGrid = ({ teams }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {teams.map((team) => (
          <TeamCard key={team.key} team={team} />
        ))}
      </Grid>
    </Container>
  )
}

export default TeamsGrid
