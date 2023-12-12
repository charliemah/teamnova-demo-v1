import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import TeamCard from '../../components/team/TeamCard'
import { exampleProgKey } from '../../config'

const titles = [
  'Why',
  'Teamnova?',
  'Team Mentoring?',
  'Collaborative Learning Over Code',
  'We\'re on a mission to make mentorship in open source',
  'more accessible for more students.'
]
const subtitles = [
  'We leverage open source to give students a disproportionate advantage in lifelong employability.',
  'We leverage open source to help universities and employers bridge the skills gap between education and work.',
  'We empower large open source projects with highly flexible software-powered solutions for high quality mentorship at scale.',
  'We help mentors and mentees maximize the benefits of collaborative learning within self-organizing teams.',
  'The Teamnova Way of Democratizing Mentorship in Open Source',
  'Featured Self-organizing Teams'
]

const subheaders = [
  'Free and Open Source Indefinitely',
  'Inspired by Larry Page\'s Experiment -',
  'Google Summer of Code (GSoC)',
  'Google Summer of Code (GSoC), as one of the most prestigious open source mentorship programs, is highly competitive. According to 2023 statistics, out of 43,765 applicants and 7,723 proposals submitted, only 967 GSoC contributors were accepted.',
  'Made in Vancouver with love'
]

const HomePage = () => {
  const assetsPath = require.context('../../assets/images', false)
  const backgroundImageUrl1 = assetsPath('./collaborative_learning_1.jpg')
  const backgroundImageUrl2 = assetsPath('./collaborative_learning_2.jpg')

  const featuredTeams = useSelector(state => state.teams.teamList.slice(0, 3))

  return (
    <Container maxWidth={false} disableGutters>
      <Grid container sx={{ height: '60vh', mb: 9 }}>
        <CssBaseline />
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              position: 'relative',
              alignItems: 'center',
              p: { xs: 3, md: 8 }
            }}
          >
            <Stack
              direction='column'
              spacing={3}
              justifyContent='space-evenly'
              sx={{ py: 3 }}
            >
              <Stack
                direction='column'
                spacing={1.5}
                justifyContent='space-evenly'
              >
                <Typography variant='h2' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                  {titles[0]}
                </Typography>
                <Typography variant='h2' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                  {titles[1]}
                </Typography>
              </Stack>
              <Typography variant='h5' color='inherit' sx={{ lineHeight: '30px' }}>
                {subtitles[0]}
              </Typography>
            </Stack>
            <Button size='large'>Learn More</Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          md={5}
          sx={{
            backgroundImage: `url(${backgroundImageUrl1})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </Grid>
      <Grid container sx={{ height: '60vh', mb: 9 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          md={5}
          sx={{
            backgroundImage: `url(${backgroundImageUrl2})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              position: 'relative',
              alignItems: 'center',
              p: { xs: 3, md: 8 }
            }}
          >
            <Stack
              direction='column'
              spacing={3}
              justifyContent='space-evenly'
              sx={{ py: 3 }}
            >
              <Stack
                direction='column'
                spacing={1.5}
                justifyContent='space-evenly'
              >
                <Typography variant='h2' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                  {titles[0]}
                </Typography>
                <Typography variant='h2' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                  {titles[1]}
                </Typography>
              </Stack>
              <Typography variant='h5' color='inherit' sx={{ lineHeight: '30px' }}>
                {subtitles[1]}
              </Typography>
            </Stack>
            <Button size='large'>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ height: '50vh' }}>
        <Grid item xs={12}>
          <Box
            sx={{
              position: 'relative',
              alignItems: 'center',
              p: { xs: 3, md: 8 }
            }}
          >
            <Stack
              direction='column'
              spacing={6}
              justifyContent='center'
              sx={{ py: 3 }}
            >
              <Typography variant='h2' align='center' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                {titles[0]} {titles[1]}
              </Typography>
              <Typography variant='h4' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '40px' }}>
                {subtitles[2]}
              </Typography>
            </Stack>
            <Stack
              direction='row'
              spacing={2}
              justifyContent='center'
              sx={{ py: 2 }}
            >
              <Button size='large'>Learn More</Button>
              <Button align='center' component={RouterLink} to={`/programs/${exampleProgKey}`} target='_blank' size='large' variant='contained'>
                See a Live Demo
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 3, md: 6 },
          mt: 9
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='subtitle1' color='inherit'>
            {subheaders[0].toUpperCase()}
          </Typography>
          <Typography variant='h4' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[4]}
          </Typography>
          <Typography variant='h4' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[5]}
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#161A1F',
          color: '#fff',
          alignItems: 'center',
          p: 6,
          mb: 9
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='subtitle1' color='primary'>
            {subheaders[1].toUpperCase()} {subheaders[2]}
          </Typography>
          <Typography variant='h6' align='center' color='inherit' gutterBottom>
            {subheaders[3]}
          </Typography>
        </Stack>
      </Box>
      <Grid container sx={{ height: '50vh' }}>
        <Grid item xs={12}>
          <Box
            sx={{
              position: 'relative',
              alignItems: 'center',
              p: { xs: 3, md: 8 }
            }}
          >
            <Stack
              direction='column'
              spacing={6}
              justifyContent='space-evenly'
              sx={{ py: 3 }}
            >
              <Typography variant='h2' align='center' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                {titles[0]} {titles[2]}
              </Typography>
              <Typography variant='h4' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '40px' }}>
                {subtitles[3]}
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 3, md: 6 },
          mt: 9
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='h3' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[3]}
          </Typography>
          <Stack
            direction='column'
            alignItems='center'
            spacing={2}
            justifyContent='space-evenly'
          >
            <Typography variant='h5' color='inherit'>
              {subtitles[4]}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#161A1F',
          color: '#fff',
          alignItems: 'center',
          p: 3,
          pb: 9,
          mb: 9
        }}
      >
        <Box
          sx={{
            position: 'relative',
            alignItems: 'center',
            py: 1
          }}
        >
          <Typography variant='h5' align='center' color='inherit' gutterBottom>
            {subtitles[5]}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {featuredTeams.map((team) => (
            <TeamCard key={team.key} team={team} />
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default HomePage
