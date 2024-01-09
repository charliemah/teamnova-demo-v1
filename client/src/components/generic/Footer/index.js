import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const title = 'Made in Vancouver with LOVE and Open Source'

const Copyright = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      Copyright 2023 {' - '} NovoOSS Labs
    </Typography>
  )
}

const Footer = () => {
  return (
    <Box component='footer' sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth='lg'>
        <Typography variant='h6' align='center' gutterBottom>
          {title}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
