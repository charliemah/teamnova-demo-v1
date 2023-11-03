import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import MentorCard from '../MentorCard'

const MentorsGrid = ({roles}) => {

  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {roles.map((role) => (
          <MentorCard key={role.number} role={role} />
        ))}
      </Grid>
    </Container>
  )
}

export default MentorsGrid