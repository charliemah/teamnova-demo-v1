import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

import TeamCard from '../../components/team/TeamCard'
import { exampleProgKey } from '../../config'

const titles = [
  'Why',
  'Teamnova?',
  'Team Mentoring?',
  'Collaborative Learning Over Code',
  'Teamnova is on a mission to make mentorship in open source',
  'More ACCESSIBLE for More Students'
]
const subtitles = [
  'We help open source projects grow self-organizing teams through collaborative mentoring.',
  'The Teamnova Way of Democratizing Mentorship in Open Source',
  'Featured Self-organizing Teams'
]
const paragraphs = [
  'While traditional open source mentorship programs are excellent, they often lack a structured approach for effective team collaboration.',
  'With our innovative team mentoring solution, we help mentors and mentees maximize the benefits of collaborative learning within self-organizing teams.'
]
const subheaders = [
  'Free and Open Source Indefinitely',
  'Inspired by Larry Page\'s Experiment -',
  'Google Summer of Code (GSoC)',
  'Made in Vancouver with love'
]

const HomePage = () => {
  const assetsPath = require.context('../../assets/images', false)
  const backgroundImageUrl1 = assetsPath('./collaborative_learning_1.jpg')
  const backgroundImageUrl2 = assetsPath('./collaborative_learning_2.jpg')

  const featuredTeams = useSelector(state => state.teams.teamList.slice(0, 3))

  return (
    <Container maxWidth={false} disableGutters>
      <Card
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <CardContent sx={{ flex: 1, px: 3, py: 12 }}>
          <Stack
            direction='column'
            spacing={3}
            justifyContent='space-evenly'
            sx={{ my: 3 }}
          >
            <Stack
              direction='column'
              spacing={1.5}
              justifyContent='space-evenly'
            >
              <Typography variant='h2' color='primary.light' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                {titles[0]}
              </Typography>
              <Typography variant='h2' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                {titles[1]}
              </Typography>
            </Stack>
            <Typography variant='h5' color='primary.dark' sx={{ lineHeight: '30px' }}>
              {subtitles[0]}
            </Typography>
          </Stack>
          <Button component={RouterLink} to={`/programs/${exampleProgKey}`} target='_blank' variant='contained'>
            See a Live Demo
          </Button>
        </CardContent>
        <CardMedia
          component='img'
          sx={{ width: '50%', display: { xs: 'none', sm: 'block' } }}
          image={backgroundImageUrl1}
        />
      </Card>
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
          <Typography variant='h3' color='primary.light' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[3]}
          </Typography>
          <Stack
            direction='column'
            alignItems='center'
            spacing={2}
            justifyContent='space-evenly'
          >
            <Typography variant='h5' color='inherit'>
              {subtitles[1]}
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
          pb: 6,
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
          <Typography variant='h5' align='center' color='primary.dark' gutterBottom>
            {subtitles[2]}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {featuredTeams.map((team) => (
            <TeamCard key={team.key} team={team} />
          ))}
        </Grid>
      </Box>
      <Card
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <CardMedia
          component='img'
          sx={{ width: '50%', display: { xs: 'none', sm: 'block' } }}
          image={backgroundImageUrl2}
        />
        <CardContent sx={{ flex: 1, p: 6 }}>
          <Stack
            direction='column'
            spacing={3}
            justifyContent='space-evenly'
            sx={{ my: 3 }}
          >
            <Stack
              direction='column'
              spacing={1.5}
              justifyContent='space-evenly'
            >
              <Typography variant='h3' color='primary.light' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                {titles[0]}
              </Typography>
              <Typography variant='h3' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                {titles[2]}
              </Typography>
            </Stack>
            <Typography variant='h5' color='primary.dark' sx={{ lineHeight: '30px' }}>
              {paragraphs[0]}
            </Typography>
            <Typography variant='h5' color='primary.dark' sx={{ lineHeight: '30px' }}>
              {paragraphs[1]}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 3, md: 6 },
          my: 9
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='h5' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[4]}
          </Typography>
          <Typography variant='h4' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[5]}
          </Typography>
          <Typography variant='h6' color='primary.light'>
            {subheaders[0]}
          </Typography>
          <Typography variant='h6' color='inherit'>
            {subheaders[1]} <Box color='primary.light' display='inline'>{subheaders[2]} </Box>
          </Typography>
        </Stack>
      </Box>
    </Container>
  )
}

export default HomePage
