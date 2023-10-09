import { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import { randomCoverImage, exampleProgKey, exampleTeamKey } from '../../config'

const HomePage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.teams.asyncFetchTeamsByProgram(exampleProgKey)
  }, [exampleProgKey])

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${randomCoverImage})`,
      }}
    >
      {<img style={{ display: 'none' }} src={randomCoverImage} alt='randomCoverImage' />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item>
          <Box
            sx={{
              position: 'relative',
              px: { xs: 3, md: 6, lg: 12 },
              pt: { xs: 12, md: 25 },
              pb: { xs: 10, md: 20 },
            }}
          >
            <Stack
              direction='column'
              alignItems='center'
              spacing={4}
              justifyContent='space-evenly'
            >
              <Typography component='h1' variant='h3' color='inherit' gutterBottom>
                What is Teamnova? 
              </Typography>
              <Typography variant='h6' color='inherit' paragraph>
                Teamnova is an A.Team-like online platform for mentorship in open source. The primary purpose of this open source project is to help university students cope with the challenges in the current tight hiring climate by working on exciting open source projects.
              </Typography>
              <Typography variant='h6' color='inherit' paragraph>
                Different from some prestigious programs, such as Google Summer of Code, Teamnova-empowered Open Source Mentorship Programs aim to help mentors and mentees foster effective community engagement and team collaboration with the unique design of S-Team(Self-organizing Team) structure.
              </Typography>
              <Stack
                sx={{ py: 2 }}
                direction='row'
                spacing={4}
                justifyContent='center'
              >
                <Button component={RouterLink} to={`/programs`} variant='contained' size='large'>
                  Demo
                </Button>
                <Button component={RouterLink} to={`/teams/${exampleTeamKey}`} variant='outlined' color='inherit' size='large'>
                  Example S-Team
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default HomePage


