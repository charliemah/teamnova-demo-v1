import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SignUpForm from '../../components/auth/SignUpForm'

function SignUpPage() {

  const currentUser = useSelector(state => state.user)

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      {currentUser.isSignedIn ? (
        <Navigate to='/' />         
      ) : (
        <main>
          <Box 
            sx={{ pt: 8 }}
          >
            <Stack
              direction='column'
              spacing={2}
              justifyContent='space-evenly'
            >
              <Typography component='h1' variant='h4' color='inherit' gutterBottom>
                Welcome to Teamnova!
              </Typography>
              <Typography variant='subtitle1' color='inherit'>
                Learn from the world's best mentors by working on real-world projects.
              </Typography>
            </Stack>
          </Box>
          <SignUpForm />
        </main>
      )}
    </Container>
  )
}

export default SignUpPage