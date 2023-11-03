import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import LinkCard from '../LinkCard'

const LinksGrid = ({ links }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {links.map((link) => (
          <LinkCard key={link._id} link={link} />
        ))}
      </Grid>
    </Container>
  )
}

export default LinksGrid
