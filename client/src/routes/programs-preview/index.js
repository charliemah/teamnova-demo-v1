import { useSelector } from 'react-redux'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import ProgramsGrid from '../../components/program/ProgramsGrid'

const ProgramsPreview = () => {

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
          mb: 4,
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
                spacing={3}
                justifyContent='space-evenly'
              >
                <Typography component='h2' variant='h4' color='inherit' gutterBottom>
                  Teamnova: Make Mentorship in Open Source Accessible for More Students
                </Typography>
                <Typography variant='h6' color='inherit'>
                  Learn from the world's best mentors by working on real-world projects. Join an Open Source Mentorship Program today!
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container sx={{ mt: -14 }} maxWidth='lg'>
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.30',
            color: '#fff',
            backgroundSize: 'cover',
          }}
        >
          <Box sx={{
              backgroundColor: 'grey.900',
              color: '#fff',
              borderBottom: 1,
              borderColor: 'divider',
              pt: 3,
              pb: 2,
              px: 2,              
            }}>
            <Typography variant='h5' color='inherit' gutterBottom>
              PROGRAMS
            </Typography>
          </Box>
          <Typography variant='subtitle1' color='secondary' gutterBottom>
            This is a demonstration of what's possible with Teamnova-empowered Open Source Mentorship Programs.
          </Typography>
          <ProgramsGrid programs={programList}/>
        </Paper>
      </Container>
    </main>
  )
}

export default ProgramsPreview