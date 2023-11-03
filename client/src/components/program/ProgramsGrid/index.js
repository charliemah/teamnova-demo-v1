import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import ProgramCard from '../ProgramCard'

const ProgramsGrid = ({ programs }) => {
  return (
    <Container sx={{ py: 12 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {programs.map((program) => (
          <ProgramCard key={program.key} program={program} />
        ))}
      </Grid>
    </Container>
  )
}

export default ProgramsGrid
