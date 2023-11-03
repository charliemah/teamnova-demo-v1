import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const title = 'Made in Vancouver with love'
const note = '* This is a demonstration of what\'s possible with Teamnova-empowered open source mentorship programs.'

const Copyright = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      Copyright {new Date().getFullYear()} {' - '} TeamnovaOSS
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
        <Typography
          variant='subtitle1'
          align='center'
          color='secondary.light'
          component='p'
        >
          {note}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
