import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import OpenRoleCard from '../OpenRoleCard'

const OpenRolesGrid = ({ roles }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {roles.map((role) => (
          <OpenRoleCard key={role.number} role={role} />
        ))}
      </Grid>
    </Container>
  )
}

export default OpenRolesGrid
