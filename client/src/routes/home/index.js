import { useSelector } from 'react-redux'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import ProgramsGrid from '../../components/program/ProgramsGrid'

const title = 'Teamnova: Make Mentorship in Open Source Accessible for More Students'
const description = 'Learn from the world\'s best mentors by working on real-world projects. Join an Open Source Mentorship Program today!'
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
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                px: { xs: 3, md: 8 },
                pt: { xs: 6, md: 16 },
                pb: { xs: 18, md: 40 },
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={3}
                justifyContent='space-evenly'
              >
                <Typography component='h2' variant='h4' color='inherit' gutterBottom>
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
      <Container sx={{ mt: { xs: -16, md: -32 } }} maxWidth='lg'>
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
              backgroundColor: 'grey.900',
              color: '#fff',
              p: { xs: 1, md: 2 },             
            }}>
            <Typography variant='h6' color='inherit' gutterBottom>
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