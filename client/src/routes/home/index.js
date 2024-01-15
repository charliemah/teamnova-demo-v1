import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import TeamCard from '../../components/team/TeamCard'
import { exampleProgKey } from '../../config'

const titles = [
  'Together, build a better future',
  'through ',
  'mentoring at scale',
  '.',
  'We empower large open source projects with highly flexible software-powered solutions for ',
  'innovative team mentorship at scale',
  '.',
  'Collaborative Learning Over Code',
  'Why',
  'Mentoring at Scale?',
  'Why',
  'Self-organizing Team?',
  'We leverage open source to help universities and employers ',
  'bridge the skills gap between education and work',
  '.'
]
const subtitles = [
  'Give students a disproportionate advantage in lifelong employability.',
  'The great success of Google Summer of Code (GSoC)',
  'Why We Need Open Source Mentorship Programs at the Linux Foundation',
  'The Teamnova way of high quality mentorship at scale',
  'Featured Self-organizing Teams'
]

const subheaders = [
  'Inspired by the complex experiment initiated by Larry Page in 2005 -',
  'Google Summer of Code (GSoC)',
  'Made in Vancouver with LOVE and Open Source',
  'Free and Open Source Indefinitely'
]

const paragraphs = [
  'Most large open source projects are keen to offer students high-quality Work-Integrated Learning opportunities for social good, even though they recognize that the likelihood of students becoming regular contributors might be lower than expected. However, scaling experienced mentors, particularly those in maintainer roles, presents a challenge, and successfully sustaining high-quality mentorship on a large scale is even more difficult.',
  'Google Summer of Code (GSoC), as one of the most prestigious open source mentorship programs, is highly competitive. According to 2023 statistics, out of 43,765 applicants and 7,723 proposals submitted, only 967 GSoC contributors were accepted.',
  'While traditional open source mentorship programs are excellent, they often lack a structured approach that allows mentors and mentees to maximize the benefits of collaborative learning. Additionally, the \'Self-organizing Team\' structure is designed to significantly streamline administrative tasks, thereby reducing the time burden on maintainers and reviewers.',
  'Teamnova open source project wants to work with partners to help solve this problem through innovative team mentoring and collaborative learning solutions, aiming to empower large open-source projects to sustain high-quality mentorship at scale.Together, let\'s work towards a better future by exposing more students to real-world software development while also helping them in developing a growth mindset.'
]

const HomePage = () => {
  const assetsPath = require.context('../../assets/images', false)
  const backgroundImageUrl1 = assetsPath('./vancouver_wallpaper_1.jpg')
  const backgroundImageUrl2 = assetsPath('./collaborative_learning_1.jpg')
  const backgroundImageUrl3 = assetsPath('./collaborative_learning_2.jpg')

  const featuredTeams = useSelector(state => state.teams.teamList.slice(0, 3))

  return (
    <Container maxWidth='xl' disableGutters>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          borderRadius: '8px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 70%',
          backgroundImage: `url(${backgroundImageUrl1})`
        }}
      >
        {<img style={{ display: 'none' }} src={backgroundImageUrl1}/>}
        <Box
          sx={{
            position: 'relative',
            alignItems: 'center',
            m: { xs: 3, md: 6 }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              bgcolor: 'deepOrange.800',
              color: '#fff',
              opacity: 0.8,
              alignItems: 'center',
              p: { xs: 3, md: 6 }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                bgcolor: '#12161A',
                color: '#fff',
                opacity: 0.95,
                borderRadius: 4,
                py: 6,
                my: 12
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={3}
              >
                <Typography variant='h3' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '60px' }} gutterBottom>
                  {titles[0]}
                </Typography>
                <Typography variant='h3' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '60px' }} gutterBottom>
                  {titles[1]}<Box color='primary.light' display='inline'>{titles[2]}</Box>{titles[3]}
                </Typography>
                <Typography variant='h5' align='center' color='inherit' sx={{ lineHeight: '40px' }}>
                  {subtitles[0]}
                </Typography>
                <Box textAlign='center'>
                  <Button component={RouterLink} to={'/discover'} size='large' style={{ textTransform: 'none', fontWeight: 'bold', lineHeight: '32px', borderRadius: 32 }} variant='contained'>
                    Start Building
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                position: 'relative',
                opacity: 1,
                p: 3,
                mt: { xs: 18, md: 54 }
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={1.5}
              >
                <Typography variant='subtitle1' align='center' color='inherit'>
                  {subheaders[0].toUpperCase()} <Box display='inline'>{subheaders[1]}</Box>
                </Typography>
                <Typography variant='subtitle2' align='center' color='inherit'>
                  {subheaders[2]}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 3, md: 6 }
        }}
      >
        <Container maxWidth='md'>
          <Stack
            direction='column'
            spacing={6}
            justifyContent='center'
            sx={{
              py: 3
            }}
          >
            <Typography variant='h4' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '60px' }} gutterBottom>
              {titles[4]}
              <Box color='primary.dark' display='inline'>{titles[5]}</Box>
              {titles[6]}
            </Typography>
            <Typography variant='body1' color='inherit' paragraph>
              {paragraphs[0]}
            </Typography>
          </Stack>
          <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            sx={{ py: 2 }}
          >
            <Button component={RouterLink} to={'/discover'} size='large' style={{ textTransform: 'none', borderRadius: 8 }} variant='outlined'>Learn More</Button>
            <Button component={RouterLink} to={`/programs/${exampleProgKey}`} target='_blank' size='large' style={{ textTransform: 'none', borderRadius: 8 }} variant='contained'>
              Try Teamnova for free
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          borderRadius: '8px 8px 0 0',
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
          <Typography variant='h3' color='primary.light' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[7]}
          </Typography>
          <Stack
            direction='column'
            alignItems='center'
            spacing={2}
            justifyContent='space-evenly'
          >
            <Typography variant='h5' color='inherit'>
              {subtitles[3]}
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
          borderRadius: '0 0 8px 8px',
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
            {subtitles[4]}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {featuredTeams.map((team) => (
            <TeamCard key={team.key} team={team} />
          ))}
        </Grid>
      </Box>
      <Grid container sx={{ height: '60vh', my: 9 }}>
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
                <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
                  {titles[8]}
                </Typography>
                <Typography variant='h4' color='primary' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
                  {titles[9]}
                </Typography>
              </Stack>
              <Typography variant='body1' color='inherit' paragraph>
                {paragraphs[1]}
              </Typography>
            </Stack>
            <Button size='large' style={{ textTransform: 'none' }} >Learn More</Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          md={5}
          sx={{
            borderRadius: '8px',
            backgroundImage: `url(${backgroundImageUrl2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </Grid>
      <Grid container sx={{ height: '60vh', my: 9 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          md={5}
          sx={{
            borderRadius: '8px',
            backgroundImage: `url(${backgroundImageUrl3})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              position: 'relative',
              alignItems: 'center',
              p: { xs: 3, md: 6 }
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
                <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
                  {titles[10]}
                </Typography>
                <Typography variant='h4' color='primary' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
                  {titles[11]}
                </Typography>
              </Stack>
              <Typography variant='body1' color='inherit' paragraph>
                {paragraphs[2]}
              </Typography>
            </Stack>
            <Button size='large' style={{ textTransform: 'none' }} >Learn More</Button>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          borderRadius: '8px',
          p: { xs: 3, md: 6 }
        }}
      >
        <Container maxWidth='md'>
          <Stack
            direction='column'
            spacing={6}
            justifyContent='center'
            sx={{
              py: 3
            }}
          >
            <Typography variant='h4' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '60px' }} gutterBottom>
              {titles[12]}
                <Box color='primary.light' display='inline'>{titles[13]}</Box>
              {titles[14]}
            </Typography>
            <Typography variant='body1' color='inherit' paragraph>
              {paragraphs[3]}
            </Typography>
          </Stack>
        </Container>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='center'
          sx={{ py: 2 }}
        >
          <Button component={RouterLink} to={'/discover'} size='large' style={{ textTransform: 'none', borderRadius: 8 }} variant='outlined'>Learn More</Button>
          <Button component={RouterLink} to={`/programs/${exampleProgKey}`} target='_blank' size='large' style={{ textTransform: 'none', borderRadius: 8 }} variant='contained'>
            Try Teamnova for free
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default HomePage
