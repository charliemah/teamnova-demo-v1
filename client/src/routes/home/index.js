import { useSelector } from 'react-redux'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import ProgramsGrid from '../../components/program/ProgramsGrid'

const title = 'Make Mentorship in Open Source Accessible for More Students'
const description = 'Learn from the world\'s best mentors by working on real-world projects. Join a Teamnova-empowered Open Source Mentorship Program today!'
const note = '* This is a demonstration of what\'s possible with Teamnova-empowered Open Source Mentorship Programs.'

const HomePage = () => {

  const assetsPath = require.context('../../assets/images', false)
  const backgroundImageUrl = assetsPath('./default_program_thumbnail.jpg')

  const programList = useSelector(state => state.programs.programList)

  return (
    <main>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mt: 2,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        {<img style={{ display: 'none' }} src={backgroundImageUrl}/>}
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
          <Grid item md={8}>
            <Box
              sx={{
                position: 'relative',
                px: { xs: 3, md: 12 },
                pt: { xs: 10, md: 20 },
                pb: 60,
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={6}
                justifyContent='space-evenly'
              >
                <Typography component='h2' variant='h4' color='inherit' sx={{ fontWeight: 'bold' }} gutterBottom>
                  {title}
                </Typography>
                <Typography variant='h6' color='inherit'>
                  {description}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container sx={{ mt: -25 }} maxWidth='xl'>
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.30',
            color: '#fff',
            mb: 12,
            backgroundSize: 'cover',
          }}
        >
          <Box sx={{
              backgroundColor: '#002884',
              color: '#fff',
              p: { xs: 1, md: 2 },             
            }}>
            <Typography variant='h6' color='inherit' sx={{ fontWeight: 'bold' }}>
              PROGRAMS
            </Typography>
            <Typography variant='subtitle2' color='inherit' gutterBottom>
              {note}
            </Typography>
          </Box>
          <ProgramsGrid programs={programList}/>
        </Paper>
      </Container>
    </main>
  )
}

export default HomePage